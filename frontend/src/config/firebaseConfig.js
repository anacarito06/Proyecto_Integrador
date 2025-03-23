// frontend/src/config/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCTPfAJ4JZ-EFZrrNAknHFIcLXKPM7twCM",
  authDomain: "sistema-de-pedidos-11b69.firebaseapp.com",
  projectId: "sistema-de-pedidos-11b69",
  storageBucket: "sistema-de-pedidos-11b69.appspot.com",
  messagingSenderId: "685937812040",
  appId: "1:685937812040:web:6fd5de64d33ae22bc6ae7d",
  measurementId: "G-0TQSLVVNED"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
