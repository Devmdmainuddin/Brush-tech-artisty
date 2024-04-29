
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVLElEmZdYZolm810KChOSfEsryi0OE84",
  authDomain: "brush-tech-artisty.firebaseapp.com",
  projectId: "brush-tech-artisty",
  storageBucket: "brush-tech-artisty.appspot.com",
  messagingSenderId: "1051566910928",
  appId: "1:1051566910928:web:a27abab7327625f01f5dd5"
};

// console.log( env)
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth