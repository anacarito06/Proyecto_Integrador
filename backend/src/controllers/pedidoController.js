const { obtenerPedidos } = require('../models/pedidoModel');

// Obtener todos los pedidos
const getPedidos = async (req, res) => {
  try {
    const pedidos = await obtenerPedidos();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pedidos' });
  }
};

module.exports = {
  getPedidos,
};
