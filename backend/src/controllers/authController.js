const admin = require("../config/firebase");
const auth = admin.auth();

const registrarUsuario = async (req, res) => {
  const { email, password, nombre, rol } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName: nombre,
    });

    await admin.auth().setCustomUserClaims(userRecord.uid, { rol });

    res.status(201).json({ mensaje: "Usuario registrado con éxito", uid: userRecord.uid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registrarUsuario };
