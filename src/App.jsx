import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import { CarritoProvider } from "./context/CarritoContext";  // Importamos el proveedor del carrito
// App.jsx o index.jsx
import './App.css';


function App() {
  return (
    <CarritoProvider> {/* Envolvemos todo dentro del proveedor */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;

