require("dotenv").config();
const admin = require("firebase-admin");
const serviceAccount = require("../config/serviceAccountKey.json");


// Verifica que la variable de entorno existe
if (!process.env.FIREBASE_CONFIG) {
  throw new Error("🔥 ERROR: La variable FIREBASE_CONFIG no está definida en el .env");
}

// Convierte la variable FIREBASE_CONFIG en un objeto JSON
const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
