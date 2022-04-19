// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtw8ozRzQEPcxJES79aH7YgdJy6SP8Sy4",
    authDomain: "react-ecommerce-8c5d6.firebaseapp.com",
    projectId: "react-ecommerce-8c5d6",
    storageBucket: "react-ecommerce-8c5d6.appspot.com",
    messagingSenderId: "546678419461",
    appId: "1:546678419461:web:41cae2d272d2d90f3b2c6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db