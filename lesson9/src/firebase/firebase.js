
import {initializeApp} from "firebase/app";
// Добавлено
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Конфиг файрбейс, создаётся при создании проекта в самОй файрбейс
const firebaseConfig = {
    apiKey: "AIzaSyBLkgQxQOKoQ60yTgvIR0DGx3JD7rxts3g",
    authDomain: "react-lesson9.firebaseapp.com",
    projectId: "react-lesson9",
    storageBucket: "react-lesson9.appspot.com",
    messagingSenderId: "152361367070",
    appId: "1:152361367070:web:d79a77dc7b167af2fde00f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Модули, используемые в проекте (аутентификации и firestore)
export const firestore = getFirestore(app)
export const auth = getAuth(app)