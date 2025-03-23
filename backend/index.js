const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const pedidoRoutes = require(__dirname + '/src/routes/pedidoRoutes');

app.use('/api/pedidos', pedidoRoutes);  // Rutas protegidas

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente 🚀');
});
