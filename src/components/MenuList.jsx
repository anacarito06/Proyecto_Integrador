import "react";
import { useCarrito } from "../context/CarritoContext";

const productos = [
  { id: 1, nombre: "Pizza Margarita", precio: 8.99, imagen: "/assets/pizza.jpg" },
  { id: 2, nombre: "Hamburguesa Clásica", precio: 6.99, imagen: "/assets/hamburguesa.jpg" },
  { id: 3, nombre: "Ensalada César", precio: 5.49, imagen: "/assets/ensalada.jpg" },
  { id: 4, nombre: "Pasta Alfredo", precio: 7.99, imagen: "/assets/pasta.jpg" },
];

const MenuList = () => {
  const { carrito, agregarProducto, eliminarProducto, vaciarCarrito } = useCarrito();

  // Calcular el total general del carrito
  const totalCarrito = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  // Función para finalizar pedido
  const finalizarPedido = () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío. No puedes finalizar el pedido.");
      return;
    }

    alert(`✅ Pedido finalizado con éxito. Total a pagar: $${totalCarrito.toFixed(2)}`);
    vaciarCarrito(); // Vaciar el carrito después de finalizar
  };

  return (
    <div className="h-auto w-full overflow-visible">
      <h1 className="text-3xl font-bold text-yellow-400 text-center my-6 bg-gray-900 py-3">
        🍕 Nuestro Menú
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="img-producto rounded-lg shadow-md"
            />
            <h2 className="text-xl font-semibold text-yellow-400 mt-4">
              {producto.nombre}
            </h2>
            <p className="text-green-400 font-bold">
              ${producto.precio.toFixed(2)}
            </p>
            <button
              onClick={() => agregarProducto(producto)}
              className="mt-3 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>

      {/* Sección de Carrito */}
      <div className="bg-gray-800 text-yellow-400 p-4 rounded-lg mt-6 shadow-lg">
        <h3 className="text-2xl font-bold mb-3">🛒 Carrito de Compras:</h3>
        {carrito.length > 0 ? (
          <>
            <ul>
              {carrito.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center mb-2 text-white"
                >
                  <div>
                    <span className="font-semibold">{item.nombre}</span> - 
                    Cantidad: {item.cantidad} - 
                    Subtotal: ${parseFloat(item.precio * item.cantidad).toFixed(2)}
                  </div>
                  <button
                    onClick={() => eliminarProducto(item.id)}
                    className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded-lg ml-2"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <p className="text-yellow-300 font-semibold mt-3">
              Total: ${totalCarrito.toFixed(2)}
            </p>
            <button
              onClick={finalizarPedido}
              className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
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
