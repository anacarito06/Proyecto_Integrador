// frontend/src/pages/Home.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const { user, role, loading } = useAuth();

  useEffect(() => {
    console.log("Usuario:", user);
    console.log("Rol:", role);
    console.log("Cargando:", loading);

      if (!loading && user && window.location.pathname !== "/") {
          if (role === "admin") {
              navigate("/admin/pedidosAdmin");
          } else {
              navigate("/menu");
          }
      }
  }, [loading, user, role, navigate]);
  

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div style={styles.container}>
      <h1>Bienvenido al Restaurante 🍽️</h1>
      <p>Regístrate y obtén un descuento.</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/login")}>
          Iniciar Sesión
        </button>
        <button style={styles.button} onClick={() => navigate("/Registro")}>
          Registrarse
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    color: "#fff",
    backgroundColor: "#333",
    minHeight: "100vh",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default Home;
