// authMiddleware.js (Backend)
const verificarAutenticacion = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Obtener el token Bearer
  if (!token) {
    return res.status(401).json({ message: 'No autenticado. Token no proporcionado' });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;

    // Aquí verificamos el rol del usuario
    const customClaims = decodedToken.customClaims || {};
    req.user.role = customClaims.role || 'usuario'; // Si no tiene rol, se considera usuario normal

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token no válido o expirado' });
  }
};
