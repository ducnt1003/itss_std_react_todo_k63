import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBw-VYsoepxuZFAaiX6MON6m6AA-hN3Cb0",
    authDomain: "fir-sample-3c9c8.firebaseapp.com",
    projectId: "fir-sample-3c9c8",
    storageBucket: "fir-sample-3c9c8.appspot.com",
    messagingSenderId: "374915948150",
    appId: "1:374915948150:web:513e38cc3e4e0c76ed4957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);