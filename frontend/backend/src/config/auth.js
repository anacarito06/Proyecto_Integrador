const admin = require("firebase-admin");

const auth = admin.auth();

const verificarToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Obtener el token del header

  if (!token) {
    return res.status(401).json({ error: "No autorizado" });
  }

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};

module.exports = { auth, verificarToken };
