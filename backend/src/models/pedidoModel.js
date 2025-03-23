const { db } = require('../config/firebase');

// Obtener todos los pedidos
const obtenerPedidos = async () => {
  try {
    const snapshot = await db.collection('pedidos').get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    throw new Error('Error al obtener pedidos');
  }
};

module.exports = {
  obtenerPedidos,
};