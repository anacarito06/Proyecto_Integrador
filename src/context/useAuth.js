import { useContext } from "react";
import { AuthContext } from "./AuthContext"; // Asegúrate de que el nombre es correcto

export function useAuth() {
  return useContext(AuthContext);
}
