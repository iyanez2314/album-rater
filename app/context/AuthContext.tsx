"use client";

import React, { useState, useEffect, createContext } from "react";
import { getCookie } from "cookies-next";

interface User {
  id: number;
  email: string;
  username: string;
  name: string;
  password: string;
}

interface State {
  loading: boolean;
  error: string | null;
  data: User | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
  refreshUser: () => void;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: true,
  error: null,
  data: null,
  setAuthState: () => {},
  refreshUser: () => {},
});

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<State>({
    loading: true,
    error: null,
    data: null,
  });
  const [refreshCount, setRefreshCount] = useState(0);
  const refreshTheUser = () => {
    setRefreshCount((count) => count + 1);
  };
  const fetchUser = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    setAuthState({ data: null, error: null, loading: true });
    try {
      const jwt = getCookie("jwt");
      if (!jwt) {
        return setAuthState({ data: null, error: null, loading: false });
      }
      const response = await fetch(`${apiUrl}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = await response.json();
      if (data.error) {
        setAuthState({ data: null, error: data.error, loading: false });
      }
      setAuthState({ data, error: null, loading: false });
    } catch (error: any) {
      setAuthState({ data: null, error: error.Errormessage, loading: false });
    }
  };
  useEffect(() => {
    fetchUser();
  }, [refreshCount]);
  return (
    <AuthenticationContext.Provider
      value={{ ...authState, setAuthState, refreshUser: refreshTheUser }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
