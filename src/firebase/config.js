import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBP0p1VGPk-ihlCN8mybOPauGrvWhdP_tg",
    authDomain: "chatapp-5da41.firebaseapp.com",
    projectId: "chatapp-5da41",
    storageBucket: "chatapp-5da41.appspot.com",
    messagingSenderId: "522111073483",
    appId: "1:522111073483:web:b4a5bb90e6c314b05daf4e",
    measurementId: "G-XK48NYBGWR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export const auth = firebase.auth();
export const db = firebase.firestore();