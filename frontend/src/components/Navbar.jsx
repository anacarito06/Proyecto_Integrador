import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-yellow-300 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo o Nombre */}
        <h1 className="text-3xl font-bold text-yellow-400 flex items-center">
          Restaurante Indigo 🍽️
        </h1>

        {/* Links de Navegación */}
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="hover:text-yellow-500 transition duration-300">Menú</Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-yellow-500 transition duration-300">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;






