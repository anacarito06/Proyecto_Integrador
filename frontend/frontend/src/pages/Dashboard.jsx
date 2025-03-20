// frontend/src/pages/Dashboard.jsx
import "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Panel de Control</h2>
      {user ? (
        <div>
          <p>Bienvenido, {user.email}</p>
          <button onClick={logout}>Cerrar Sesión</button>
        </div>
      ) : (
        <p>No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default Dashboard;