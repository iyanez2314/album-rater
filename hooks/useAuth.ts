import { deleteCookie } from "cookies-next";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = ({ email, password }: { email: string; password: string }) => {
  const { setAuthState } = useContext(AuthenticationContext);
  const singin = async () => {
    setAuthState({ data: null, loading: true, error: null });
    try {
      const resp = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await resp.json();
      setAuthState({ data, loading: false, error: null });
    } catch (error: any) {
      setAuthState({ data: null, loading: false, error: error.message });
    }
  };
  const signup = async () => {};

  const logout = async () => {
    deleteCookie("jwt");
    setAuthState({ data: null, loading: false, error: null });
  };

  return { singin, signup, logout };
};

export default useAuth;
