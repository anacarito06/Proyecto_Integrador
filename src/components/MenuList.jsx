
import "react";
import { useCarrito } from "../context/CarritoContext";

const productos = [
  { id: 1, nombre: "Pizza Margarita", precio: 8.99, imagen: "/assets/pizza.jpg" },
  { id: 2, nombre: "Hamburguesa Clásica", precio: 6.99, imagen: "/assets/hamburguesa.jpg" },
  { id: 3, nombre: "Ensalada César", precio: 5.49, imagen: "/assets/ensalada.jpg" },
  { id: 4, nombre: "Pasta Alfredo", precio: 7.99, imagen: "/assets/pasta.jpg" },
];

const MenuList = () => {
  const { carrito, agregarProducto, eliminarProducto } = useCarrito();

  // Calcular el total del carrito
  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);
  };

  // Función para finalizar pedido
  const finalizarPedido = () => {
    alert(`¡Pedido Finalizado! Total a pagar: $${calcularTotal()}`);
  };

  return (
    <div className="h-auto w-full overflow-visible">
      <h1 className="text-3xl font-bold text-yellow-400 text-center my-6 bg-gray-900 py-3">
        🍕 Nuestro Menú
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-4">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-producto"
            />
            <h2>{producto.nombre}</h2>
            <p>${producto.precio.toFixed(2)}</p>
            <button
              onClick={() => agregarProducto(producto)}
              className="mt-3 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>

      {/* Carrito de Compras */}
      <div className="bg-gray-800 text-yellow-400 p-4 rounded-lg mt-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-3">🛒 Carrito de Compras:</h3>
        {carrito.length > 0 ? (
          <>
            <ul>
              {carrito.map((item, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{item.nombre} x {item.cantidad}</span>
                  <span className="text-green-400 font-bold">${(item.precio * item.cantidad).toFixed(2)}</span>
                  <button
                    onClick={() => eliminarProducto(item.id)}
                    className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded-lg"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <h4 className="mt-4 text-xl font-semibold">Total: ${calcularTotal()}</h4>
            <button
              onClick={finalizarPedido}
              className="mt-3 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Finalizar Pedido
            </button>
          </>
        ) : (
          <p className="text-gray-400">Tu carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default MenuList;

