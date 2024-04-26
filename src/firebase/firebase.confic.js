
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


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth