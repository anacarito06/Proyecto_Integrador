
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Chatbot from "../components/Chatbot";

const Dashboard = () => {
  const { user, logout } = useAuth();

  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Restaurante Indigo</h2>

      {/* Menú de Navegación */}
      <nav className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md mb-6">
        <ul className="flex space-x-6">
          <li><Link to="/home" className="hover:text-yellow-300">🏠 Inicio</Link></li>
          <li><Link to="/menu" className="hover:text-yellow-300">🍽️ Menú</Link></li>
          <li><Link to="/" className="hover:text-yellow-300">📊 Dashboard</Link></li>
        </ul>
      </nav>

      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-md">
          <p className="text-gray-700 font-medium">Bienvenido, <span className="font-bold">{user.email}</span></p>
          <button 
            onClick={logout} 
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            🔴 Cerrar Sesión
          </button>

          <div className="mt-6">
            <Chatbot />
          </div>
        </div>
      ) : (
        <p className="text-red-500 font-bold">No has iniciado sesión.</p>
      )}
    </div>
  );
};

export default Dashboard;
