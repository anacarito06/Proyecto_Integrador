import  { createContext, useContext, useState } from "react";

// Creamos el contexto
const CarritoContext = createContext();

// Hook personalizado para usar el contexto fácilmente
// eslint-disable-next-line react-refresh/only-export-components
export const useCarrito = () => useContext(CarritoContext);

// Componente proveedor del contexto
// eslint-disable-next-line react/prop-types
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar un producto al carrito
  const agregarProducto = (producto) => {
    const productoExistente = carrito.find((item) => item.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  // Función para finalizar el pedido (puedes personalizarla)
  const finalizarPedido = () => {
    alert("¡Pedido finalizado! Gracias por tu compra. 🛒");
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, finalizarPedido }}>
      {children}
    </CarritoContext.Provider>
  );
};
