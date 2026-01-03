// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx7TZ8hVwVzfWZL5DUw6eWz7PBYSUSRdA",
  authDomain: "fintrackr-37dfc.firebaseapp.com",
  projectId: "fintrackr-37dfc",
  storageBucket: "fintrackr-37dfc.firebasestorage.app",
  messagingSenderId: "219344360798",
  appId: "1:219344360798:web:0e10aefa156299c00fabcf",
  measurementId: "G-4YW0YD2S9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db, doc, setDoc };