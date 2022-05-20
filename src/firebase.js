import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZy4-TAPIK1UH0uBSC8gaM0r0ZzXzF5_s",
    authDomain: "xiles-shop.firebaseapp.com",
    projectId: "xiles-shop",
    storageBucket: "xiles-shop.appspot.com",
    messagingSenderId: "984534138660",
    appId: "1:984534138660:web:bf6fc017093b5bb891fdb1"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export { firebase }