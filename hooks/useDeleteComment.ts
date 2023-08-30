import { useEffect, useState } from "react";

const useDeleteComment = () => {
  const [error, setError] = useState<string | null>(null);
  const deleteComment = async (reviewId: number) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/comments/deleteComment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reviewId: reviewId,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete comment.");
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { error, deleteComment };
};

export default useDeleteComment;
