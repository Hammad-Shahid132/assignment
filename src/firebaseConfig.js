import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBSah6DFojqNGCO-zZLQjnIwAANAYRT-Y",
  authDomain: "hiring-7adca.firebaseapp.com",
  projectId: "hiring-7adca",
  storageBucket: "hiring-7adca.firebasestorage.app",
  messagingSenderId: "840533525020",
  appId: "1:840533525020:web:8cdd47fca9d882b9c915d9",
  measurementId: "G-8PV0TQ5KXP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export default db; // Export Firestore instance
