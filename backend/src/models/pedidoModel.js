const { db } = require("../config/firebase");

const crearPedido = async (pedido) => {
  const nuevoPedido = await db.collection("pedidos").add(pedido);
  return nuevoPedido.id;
};

const obtenerPedidos = async () => {
  const snapshot = await db.collection("pedidos").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

module.exports = { crearPedido, obtenerPedidos };
