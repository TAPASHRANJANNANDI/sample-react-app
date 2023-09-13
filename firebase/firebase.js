import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC6eshJWK6XZQ3h5g45RKkPO39MpTKP6iQ",
    authDomain: "fir-todo-nextjs.firebaseapp.com",
    projectId: "fir-todo-nextjs",
    storageBucket: "fir-todo-nextjs.appspot.com",
    messagingSenderId: "978659746849",
    appId: "1:978659746849:web:568e9572fbb365d7102f60"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);