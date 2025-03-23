<<<<<<< HEAD:frontend/src/pages/Home.jsx
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
=======
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
>>>>>>> b544214655bffaf466dbd174658564e762f4c468:src/pages/Home.jsx

  return (
    <div style={styles.container}>
      <h1>Bienvenido al Restaurante 🍽️</h1>
<<<<<<< HEAD:frontend/src/pages/Home.jsx
      <p>Regístrate y obtén un descuento.</p>
=======
      <p>Disfruta de la mejor comida con nosotros.</p>
      <p>Registrate y obten un descuento.</p>

>>>>>>> b544214655bffaf466dbd174658564e762f4c468:src/pages/Home.jsx
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
<<<<<<< HEAD:frontend/src/pages/Home.jsx
    color: "#fff",
    backgroundColor: "#333",
    minHeight: "100vh",
=======
>>>>>>> b544214655bffaf466dbd174658564e762f4c468:src/pages/Home.jsx
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
<<<<<<< HEAD:frontend/src/pages/Home.jsx
=======

>>>>>>> b544214655bffaf466dbd174658564e762f4c468:src/pages/Home.jsx
