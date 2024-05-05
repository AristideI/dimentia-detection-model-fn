import { createContext, useContext, useState } from "react";
import { SuperUserResDto } from "../types/interfaces";
import axios from "axios";
import { apiUrl } from "../utils/apiUrl";
import { redirect } from "react-router";

interface AuthContextType {
  user: SuperUserResDto | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (
    userName: string,
    password: string,
    isAdmin: boolean
  ) => Promise<void>;
  logout: () => void;
  addTotalDoc: (data: number) => void;
  totalDoc: number;
}
const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  isAuthenticated: false,
  login: async () => {},
  logout: () => {},
  addTotalDoc: () => {},
  totalDoc: 0,
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<SuperUserResDto | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [totalDoc, setTotalDoc] = useState(0);

  const addTotalDoc = (data: number) => {
    setTotalDoc(data);
  };

  const login = async (
    userName: string,
    password: string,
    isAdmin: boolean
  ) => {
    const user = await axios
      .post<SuperUserResDto>(
        `${apiUrl}/login/${isAdmin ? "admin" : "doctor"}`,
        {
          email: userName,
          password: password,
        }
      )
      .then((resp) => resp.data);
    user.isSuperAdmin = user?.isAdmin || false;
    user.isAdmin = isAdmin;
    setUser(user);
    setToken(user.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const logout = () => {
    redirect("/login");
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.clear();
  };

  const values = {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    totalDoc,
    addTotalDoc,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthContext() {
  return useContext(AuthContext);
}
