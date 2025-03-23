import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
  
      if (currentUser) {
        try {
          const docRef = doc(db, 'usuarios', currentUser.uid);
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const userRole = docSnap.data().role;
            setRole(userRole);
            localStorage.setItem("rol", userRole); // Guardamos el rol en localStorage
          } else {
            setRole('cliente');
          }
        } catch (error) {
          console.error("Error obteniendo rol de Firestore:", error);
          setRole('cliente');
        }
      } else {
        setRole('');
      }
  
      setLoading(false);
    });
  
    return unsubscribe;
  }, []);

  useEffect(() => {
    console.log("Estado final del usuario:", user);
    console.log("Estado final del rol:", role);
    console.log("Estado final de carga:", loading);
  }, [user, role, loading]);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
