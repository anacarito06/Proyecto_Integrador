<<<<<<< HEAD:frontend/src/pages/Login.jsx
=======
import { useState } from "react";
>>>>>>> b544214655bffaf466dbd174658564e762f4c468:src/pages/Login.jsx
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD:frontend/src/pages/Login.jsx
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Verificar si existe el documento del usuario en Firestore
      const docRef = doc(db, "usuarios", user.uid);
      const docSnap = await getDoc(docRef);
  
      if (!docSnap.exists()) {
        alert("No se encontró información del usuario en la base de datos.");
        return;
      }
  
      const userRole = docSnap.data().role;
      localStorage.setItem("usuario", JSON.stringify({ email: user.email, role: userRole }));
  
      // Redirigir según el rol obtenido
      console.log("Rol del usuario:", userRole);
      
      if (userRole === "admin") {
        navigate("/admin/pedidosAdmin");
      } else {
        navigate("/menu");
      }
  
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión: " + error.message);
=======
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Inicio de sesión exitoso");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión: " + error.message); // Para mostrar el error más fácilmente
>>>>>>> b544214655bffaf466dbd174658564e762f4c468:src/pages/Login.jsx
    }
  };

  return (
    <div style={styles.container}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
  },
  input: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "250px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};


export default Login;