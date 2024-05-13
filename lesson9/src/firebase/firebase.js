
import {initializeApp} from "firebase/app";
// Добавлено
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Конфиг файрбейс, создаётся при создании проекта в самОй файрбейс
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Модули, используемые в проекте (аутентификации и firestore)
export const firestore = getFirestore(app)
export const auth = getAuth(app)