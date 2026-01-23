import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { AuthContextType, AuthStatus, User } from "@/types";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  const setAuth = (userData: User, token: string) => {
    setUser(userData);
    setAccessToken(token);
    setStatus("authenticated");

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setStatus("unauthenticated");

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      setStatus("unauthenticated");
      return;
    }

    setAccessToken(token);
    setUser(JSON.parse(userData));
    setStatus("authenticated");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        status,
        setAuth,
        logout,
        isAuthenticated: status === "authenticated",
        isLoading: status === "loading",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
