const express = require("express");
const router = express.Router();
const { db } = require("../firebase"); // Importamos Firestore

// Crear un pedido
router.post("/crear", async (req, res) => {
  try {
    const { usuarioId, productos, total } = req.body;

    // Verificamos que los datos sean correctos
    if (!usuarioId || !productos || !total) {
      return res.status(400).json({ error: "Datos incompletos" });
    }

    // Creamos el pedido en Firestore
    const nuevoPedido = {
      usuarioId,
      productos,
      total,
      estado: "pendiente",
      fecha: new Date().toISOString(),
    };

    const pedidoRef = await db.collection("pedidos").add(nuevoPedido);

    res.status(201).json({ id: pedidoRef.id, ...nuevoPedido });
  } catch (error) {
    console.error("Error al crear pedido:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;
