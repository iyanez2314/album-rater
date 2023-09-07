"use client";
import { useState, useEffect } from "react";

interface UpdateCommentArguments {
  id: number;
  title: string;
  body: string;
}

const useUpdateComment = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const updateComment = async ({ id, body, title }: UpdateCommentArguments) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

      setLoading(true);
      const resp = await fetch(`${apiUrl}/api/comments/updateComment`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          body,
          title,
        }),
      });
      const data = await resp.json();
      setLoading(false);
      return data;
    } catch (error: any) {
      return error.message;
    }
  };

  return { updateComment, loading };
};

export default useUpdateComment;
