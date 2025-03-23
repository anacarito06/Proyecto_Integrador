const admin = require('firebase-admin');
const serviceAccount = require('./firebaseConfig.json'); // Ajusta la ruta según tu archivo JSON

// Inicializamos Firebase Admin si no está inicializado
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

// Función para asignar el rol de admin
const asignarRolAdmin = async (uid) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log(`✅ Rol de admin asignado correctamente al usuario con UID: ${uid}`);
  } catch (error) {
    console.error('❌ Error al asignar rol de admin:', error);
  }
};

// Coloca aquí el UID del usuario que quieres convertir en admin
const uid = 'cbUjvRoj9BT7SMz3D8irekCR6eI3';  // Reemplaza con el UID correcto
asignarRolAdmin(uid);
