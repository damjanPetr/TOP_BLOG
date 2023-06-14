import { createContext, useState, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const login = async (data) => {
    setUser(data.user);
    window.localStorage.setItem("token", data.signedToken);
    window.localStorage.setItem("user", JSON.stringify(data.user));
    navigate("/", { replace: true });
  };

  const logout = () => {
    window.localStorage.clear();
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
