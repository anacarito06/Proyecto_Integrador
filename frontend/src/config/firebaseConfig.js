import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCTPfAJ4JZ-EFZrrNAknHFIcLXKPM7twCM",
    authDomain: "sistema-de-pedidos-11b69.firebaseapp.com",
    projectId: "sistema-de-pedidos-11b69",
    storageBucket: "sistema-de-pedidos-11b69.firebasestorage.app",
    messagingSenderId: "685937812040",
    appId: "1:685937812040:web:6fd5de64d33ae22bc6ae7d",
    measurementId: "G-0TQSLVVNED"
  };


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de autenticación
const auth = getAuth(app);

export { auth };  // Exporta también `app` por si es necesario en otro lado
