import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita la recarga de la página

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/menu"); // Solo se ejecuta después de autenticarse correctamente
        } catch (error) {
            console.error("Error al iniciar sesión:", error.message);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Iniciar Sesión</h2>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Ingresar</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#1c1c1c", // Fondo oscuro
    },
    title: {
        color: "#ffcc00", // Amarillo dorado para destacar
        fontSize: "32px",
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#2a2a2a", // Fondo más oscuro para el formulario
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    input: {
        width: "250px",
        padding: "10px",
        margin: "10px",
        border: "none",
        borderRadius: "5px",
        fontSize: "16px",
        backgroundColor: "#333",
        color: "white",
        outline: "none",
    },
    button: {
        marginTop: "10px",
        padding: "12px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#00b673",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        transition: "background 0.3s",
    },
};

export default Login;
