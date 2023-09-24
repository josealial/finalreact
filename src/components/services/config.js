
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgVpwoTXk7MXrdogaWULESjKAn3RUIcNg",
  authDomain: "react-shirts.firebaseapp.com",
  projectId: "react-shirts",
  storageBucket: "react-shirts.appspot.com",
  messagingSenderId: "871245738487",
  appId: "1:871245738487:web:15f52bcb39ecd74926fef2"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

