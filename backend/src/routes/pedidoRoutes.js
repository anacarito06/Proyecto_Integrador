const express = require("express");
const { verificarToken, verificarRol } = require('../../middlewares/authMiddleware');

const router = express.Router();

router.post("/", verificarToken, verificarRol(["cliente", "mesero"]), (req, res) => {
  res.json({ mensaje: "Pedido creado con éxito" });
});

router.get("/", verificarToken, verificarRol(["mesero", "cocina", "admin"]), (req, res) => {
  res.json({ mensaje: "Lista de pedidos" });
});

module.exports = router;

