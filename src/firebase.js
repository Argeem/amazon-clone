import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBxXowxDTKRiO3XY6GUvwtj1OPhQwWrXjM",
    authDomain: "clone-145e2.firebaseapp.com",
    projectId: "clone-145e2",
    storageBucket: "clone-145e2.appspot.com",
    messagingSenderId: "122475542390",
    appId: "1:122475542390:web:ce767ae65bc1b2c9f9ec57",
    measurementId: "G-43FL1H03PL"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };