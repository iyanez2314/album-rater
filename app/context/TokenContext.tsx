"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import { fetchToken } from "../../util/fetchToken";

interface ITokenContext {
  token: string | null;
  expirationTime: number;
}

const TokenContext = createContext<ITokenContext>({
  token: null,
  expirationTime: 0,
});

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [expirationTime, setExpirationTime] = useState<number>(0);
  const fetchingToken = useRef(false);

  useEffect(() => {
    const fetchAccessToken = async () => {
      fetchingToken.current = true;
      // Check the experation time before making the request
      if (!token || Date.now() > expirationTime) {
        const response = await fetch("/api/token/fetchToken");
        const data = await response.json();
        const accessToken = data.accessToken;
        if (!accessToken) {
          throw new Error("No access token found");
        }
        setToken(accessToken);
        setExpirationTime(Date.now() + 3600 * 1000);
      }
      fetchingToken.current = false;
    };

    if ((!token || Date.now() > expirationTime) && !fetchingToken.current) {
      fetchAccessToken();
    }
  }, [token, expirationTime]);

  return (
    <TokenContext.Provider value={{ token, expirationTime }}>
      {token && expirationTime && children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
