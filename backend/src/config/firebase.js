const admin = require('firebase-admin');
const serviceAccount = require('./firebaseConfig.json'); // Ajusta según tu configuración

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };

