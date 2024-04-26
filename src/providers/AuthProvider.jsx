import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    onAuthStateChanged
    , signOut
} from "firebase/auth";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.confic";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    const [loader, setloader] = useState(true)

    const createUser = (email, password) => {

        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {
        setloader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserProfile = (name,image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
          })
          
    }
     
  const googleLogin = () => {
    setloader(true);
    return signInWithPopup(auth, googleProvider);
  };

  
  const githubLogin = () => {
    setloader(true);
    return signInWithPopup(auth, githubProvider);
  };

    const logOut = () => {
        setuser(null);
        setloader(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloader(false)
          
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authinfo = { user, loader, setloader, createUser, signInUser,googleLogin,githubLogin,updateUserProfile, logOut }
    
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;