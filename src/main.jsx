
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; 
import { CarritoProvider } from "./context/CarritoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CarritoProvider>
    <App />
  </CarritoProvider>
);

