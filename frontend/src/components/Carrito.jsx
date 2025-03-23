// src/components/Carrito.jsx
import "react";
import { useCarrito } from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, vaciarCarrito } = useCarrito();

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {carrito.map((item) => (
            <li key={item.id}>
              {item.nombre} x {item.cantidad} - ${item.precio * item.cantidad}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
      <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      <button onClick={() => alert("Pedido realizado con éxito")}>Realizar Pedido</button>
    </div>
  );
};

export default Carrito;

