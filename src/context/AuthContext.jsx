import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (token && !user) {
        try {
          const res = await fetch("https://finanziweb-backend.onrender.com/api/users/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (res.ok) {
            const userData = await res.json();
            login(userData, token);
          } else {
            console.warn("Token inválido o expirado, cerrando sesión");
            logout();
          }
        } catch (err) {
          console.error("Error al obtener el usuario:", err);
          logout();
        }
      }
    };
  
    fetchUser();
  }, [token]);
  

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
