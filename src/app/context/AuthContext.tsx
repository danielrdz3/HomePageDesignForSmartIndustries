import React, { createContext, useContext, useState, ReactNode } from "react";

export interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  sub: string;
}

interface AuthContextValue {
  user: GoogleUser | null;
  login: (user: GoogleUser) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const defaultValue: AuthContextValue = {
  user: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
};

const AuthContext = createContext<AuthContextValue>(defaultValue);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<GoogleUser | null>(() => {
    try {
      const stored = localStorage.getItem("si_auth_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  function login(u: GoogleUser) {
    setUser(u);
    localStorage.setItem("si_auth_user", JSON.stringify(u));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("si_auth_user");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
