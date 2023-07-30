import { useState, useEffect } from "react";
import { fetchToken } from "../util/fetchToken";

const useToken = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [expirationTime, setExpirationTime] = useState(0);

  const fetchAccessToken = async () => {
    const accessToken = await fetchToken();
    console.log(accessToken);
    if (!accessToken) {
      throw new Error("Couldn't fetch access token");
    }
    setAccessToken(accessToken);
    setExpirationTime(Date.now() + 3600 * 1000);
  };

  useEffect(() => {
    if (!accessToken || Date.now() > expirationTime) {
      fetchAccessToken();
    }
  }, [accessToken, expirationTime]);

  return accessToken;
};

const useSearch = (search: string, delay: number) => {
  console.log(search);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const token = useToken();
  if (!token) {
    return { data: null, error: "No token" };
  }
  useEffect(() => {
    const fetchData = async () => {
      if (search.trim() === "") {
        return; // exit here if searchValue is empty
      }
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${search}&type=artist`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);

        setData(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    const timeoutId = setTimeout(fetchData, delay);
    return () => clearTimeout(timeoutId);
  }, [search, delay]); // use searchValue instead of search here

  return { data, error };
};

export default useSearch;
