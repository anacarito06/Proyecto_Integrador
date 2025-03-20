import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>Bienvenido al Restaurante 🍽️</h1>
      <p>Disfruta de la mejor comida con nosotros.</p>
      <p>Registrate y obten un descuento.</p>

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

