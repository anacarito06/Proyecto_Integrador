require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pedidoRoutes = require("./routes/pedidoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/auth", authRoutes);

// Rutas base (Temporalmente solo para pruebas)
app.get("/", (req, res) => {
  res.send("API del Sistema de Gestión de Pedidos funcionando 🚀");
});

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Servidor corriendo en http://localhost:${5000}`);
});
