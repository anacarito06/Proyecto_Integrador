import  { useState } from "react";
import { db, collection, addDoc } from "../../config/firebase.js";


function PedidoForm() {
  const [pedido, setPedido] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "pedidos"), {
        pedido: pedido,
        timestamp: new Date()
      });
      alert("Pedido guardado en Firestore!");
      setPedido(""); // Limpiar el campo
    } catch (error) {
      console.error("Error al guardar pedido:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pedido:
        <input 
          type="text" 
          value={pedido} 
          onChange={(e) => setPedido(e.target.value)} 
        />
      </label>
      <button type="submit">Enviar Pedido</button>
    </form>
  );
}

export default PedidoForm;

