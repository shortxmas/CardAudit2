// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtqaDNrL6U1U8iEWDeNThFF7KBcFFC0ys",
  authDomain: "card-audit.firebaseapp.com",
  projectId: "card-audit",
  storageBucket: "card-audit.appspot.com",
  messagingSenderId: "325669890497",
  appId: "1:325669890497:web:7c2f4e9e1eb6046c10a740",
  measurementId: "G-PNQS2YE079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();


