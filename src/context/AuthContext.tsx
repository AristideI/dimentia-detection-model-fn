import { createContext, useContext, useState } from "react";
import { UserResDto } from "../types/interfaces";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { redirect } from "react-router";

interface AuthContextType {
  user: UserResDto | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (
    userName: string,
    password: string,
    isAdmin: boolean
  ) => Promise<void>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserResDto | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (
    userName: string,
    password: string,
    isAdmin: boolean
  ) => {
    const user = await axios.post<UserResDto>(
      `${apiUrl}/login/${isAdmin ? "admin" : "doctor"}`,
      {
        email: userName,
        password: password,
      }
    );
    user.data.isAdmin = isAdmin;
    setUser(user.data);
    setToken(user.data.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", user.data.token);
    localStorage.setItem("user", JSON.stringify(user.data));
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    redirect("/");
  };

  const values = {
    user,
    token,
    isAuthenticated,
    login,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  return useContext(AuthContext);
}
