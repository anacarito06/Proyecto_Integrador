const admin = require('firebase-admin');

// Verificar si el usuario está autenticado
const verificarAutenticacion = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtener el token Bearer
  if (!token) {
    return res.status(401).json({ message: 'No autenticado. Token no proporcionado' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Guardamos la info del usuario en la petición
    next(); // Pasar al siguiente middleware o controlador
  } catch (error) {
    res.status(401).json({ message: 'Token no válido o expirado' });
  }
};

// Verificar si el usuario es administrador
const verificarRolAdmin = async (req, res, next) => {
  try {
    const user = req.user;
    const userDoc = await admin.firestore().collection('users').doc(user.uid).get();

    if (userDoc.exists && userDoc.data().role === 'admin') {
      next(); // Usuario autorizado como administrador
    } else {
      res.status(403).json({ message: 'Acceso denegado. No tienes permisos de administrador.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al verificar el rol del usuario.' });
  }
};


module.exports = {
  verificarAutenticacion,
  verificarRolAdmin,
};
