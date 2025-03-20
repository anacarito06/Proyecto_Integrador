const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Inicializar Firebase
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Ruta para agregar un pedido
app.post("/crear-pedido", async (req, res) => {
  try {
    const pedido = req.body;
    const nuevoPedido = await db.collection("pedidos").add(pedido);
    res.status(200).json({ id: nuevoPedido.id, mensaje: "Pedido creado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});
