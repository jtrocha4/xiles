import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3eNHfcvkmcTsqjXCcfhHvs79ePi9BiGk",
    authDomain: "xiles-5b78e.firebaseapp.com",
    projectId: "xiles-5b78e",
    storageBucket: "xiles-5b78e.appspot.com",
    messagingSenderId: "180252660731",
    appId: "1:180252660731:web:33abfb6841b590364ff15e"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export {firebase}