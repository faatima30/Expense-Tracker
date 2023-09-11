// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd0tDsn2mAUnF4WLq6oiIPrxRM32DfjU4",
  authDomain: "expense-tracker-2ff70.firebaseapp.com",
  projectId: "expense-tracker-2ff70",
  storageBucket: "expense-tracker-2ff70.appspot.com",
  messagingSenderId: "329470943810",
  appId: "1:329470943810:web:75ac0f48935f813faa83db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
