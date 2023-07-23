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
}

export const AuthenticationContext = createContext<AuthState>({
  loading: true,
  error: null,
  data: null,
  setAuthState: () => {},
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

  //   TODO: Fetch user from API
  const fetchUser = async () => {
    setAuthState({ data: null, error: null, loading: true });
    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        return setAuthState({ data: null, error: null, loading: false });
      }

      const response = await fetch("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = await response.json();

      console.log("in Auth context", data);

      if (data.error) {
        console.log(data.error);
        setAuthState({ data: null, error: data.error, loading: false });
      }
      setAuthState({ data, error: null, loading: false });
    } catch (error: any) {
      console.log(error);
      setAuthState({ data: null, error: error.Errormessage, loading: false });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
