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

async function testFirestore() {
  try {
    const docRef = await addDoc(collection(db, "testCollection"), {
      testField: "testValue",
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

testFirestore();

export default db; // Export Firestore instance
