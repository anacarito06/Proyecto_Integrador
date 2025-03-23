// main.jsx
import "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Verifica esto
import { CarritoProvider } from "./context/CarritoContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);
