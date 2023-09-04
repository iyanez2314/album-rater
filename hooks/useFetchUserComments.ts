import { useEffect, useState } from "react";

const useFetchUserComments = (userId: any) => {
  const [usersComments, setUsersComments] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<Number>(0);

  const refreshData = () => {
    setRefresh((prev: any) => prev + 1);
  };

  useEffect(() => {
    const fetchUsersComments = async () => {
      try {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: userId?.email }),
        };
        setLoading(true);
        const res = await fetch("/api/comments/fetchUserComments", options);
        const resData = await res.json();
        setUsersComments(resData.userComments);
        setLoading(false);
      } catch (error: any) {
        setError(error);
      }
    };
    fetchUsersComments();
  }, [refresh]);

  return { usersComments, error, loading, refreshData };
};

export default useFetchUserComments;
