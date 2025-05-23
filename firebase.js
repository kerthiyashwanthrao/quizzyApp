import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBEF1F7_qy-0ZHFJEilgFo-0_u5E-p_89Q",
    authDomain: "quizzy-92aa1.firebaseapp.com",
    projectId: "quizzy-92aa1",
    storageBucket: "quizzy-92aa1.firebasestorage.app",
    messagingSenderId: "477461318339",
    appId: "1:477461318339:web:569b8f24409c899b5e3076",
    measurementId: "G-T4SM5JSCH6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

