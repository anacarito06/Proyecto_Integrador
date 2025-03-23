import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";  // Asegúrate de importar bien Firebase
import { useState } from "react";

console.log("🔥 Firebase Auth:", auth);

const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistro = async (e) => {
    e.preventDefault();
    console.log("📌 Botón de registro presionado");
  
    if (!email || !password) {
      console.log("🚨 Falta correo o contraseña");
      alert("Por favor, ingresa un correo y contraseña");
      return;
    }
  
    try {
      console.log("🚀 Intentando registrar usuario...");
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ Usuario registrado con éxito:", userCredential.user);
      alert("Registro exitoso");
    } catch (error) {
      console.error("⚠️ Error al registrar:", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};


export default Registro;
