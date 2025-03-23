import { useEffect, useState } from "react";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";

const PedidosAdmin = () => {
  const { role } = useAuth();
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const obtenerPedidos = async () => {
      if (role === "admin") {
        try {
          const querySnapshot = await getDocs(collection(db, "pedidos"));
          const pedidosArray = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPedidos(pedidosArray);
        } catch (error) {
          console.error("Error obteniendo pedidos:", error);
        }
      }
    };

    obtenerPedidos();
  }, [role]);

  if (role !== "admin") {
    return <p>No tienes permiso para ver los pedidos.</p>;
  }

  return (
    <div>
      <h2>Pedidos Administrador</h2>
      <ul>
        {pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <li key={pedido.id}>
              Producto: {pedido.Producto} - Cantidad: {pedido.Cantidad}
            </li>
          ))
        ) : (
          <p>No hay pedidos disponibles.</p>
        )}
      </ul>
    </div>
  );
};

export default PedidosAdmin;

