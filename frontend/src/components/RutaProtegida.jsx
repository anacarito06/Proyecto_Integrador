import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// eslint-disable-next-line react/prop-types
const RutaProtegida = ({ children }) => {
  const { user, role, loading } = useAuth();

  if (loading) return <p>Cargando...</p>;

  if (!user || (role !== 'admin' && window.location.pathname === '/admin/pedidosAdmin')) {
    console.log('Acceso denegado: Usuario no autorizado o rol incorrecto');
    return <Navigate to="/" />;
  }

  return children;
};

export default RutaProtegida;
