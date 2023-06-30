import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7nDoLKJzUAzENGprhRYYjTxe8Giefxcw",
    authDomain: "tpfinal-395c6.firebaseapp.com",
    projectId: "tpfinal-395c6",
    storageBucket: "tpfinal-395c6.appspot.com",
    messagingSenderId: "872329099948",
    appId: "1:872329099948:web:1e7ebf6bc0552e321c3d09",
    measurementId: "G-S83BF28HGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
