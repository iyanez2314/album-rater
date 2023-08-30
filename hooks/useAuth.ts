import { deleteCookie } from "cookies-next";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const singin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setAuthState({ data: null, loading: true, error: null });
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      console.log(apiUrl);
      const resp = await fetch(`${apiUrl}/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await resp.json();
      if (resp.status === 400) {
        setAuthState({ data: null, loading: false, error: data?.message });
        return;
      }
      setAuthState({ data, loading: false, error: null });
    } catch (error: any) {
      setAuthState({ data: null, loading: false, error: error.message });
    }
  };

  const signup = async ({
    email,
    name,
    password,
    username,
  }: {
    email: string;
    name: string;
    password: string;
    username: string;
  }) => {
    setAuthState({ data: null, loading: true, error: null });
    try {
      const resp = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password, username }),
      });
      const data = await resp.json();
      setAuthState({ data, loading: false, error: null });
    } catch (error: any) {
      setAuthState({ data: null, loading: false, error: error.message });
    }
  };

  const logout = async () => {
    deleteCookie("jwt");
    setAuthState({ data: null, loading: false, error: null });
  };

  const updateProfile = async ({
    originalEmail,
    email,
    username,
    name,
  }: {
    originalEmail: string;
    email: string;
    username: string;
    name: string;
  }) => {
    setAuthState({ data: null, loading: true, error: null });
    try {
      const resp = await fetch("http://localhost:3000/api/auth/updateInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          originalEmail,
          email,
          username,
          name,
        }),
      });
      const data = await resp.json();
      setAuthState({ data, loading: false, error: null });
    } catch (error: any) {
      setAuthState({ data: null, loading: false, error: error.message });
    }
  };

  return { singin, signup, logout, updateProfile };
};

export default useAuth;
