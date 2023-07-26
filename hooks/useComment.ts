interface CreateCommentsArguments {
  albumTitle: string;
  albumId: string;
  userId: string | number;
  title: string;
  rating: string;
  comment: string;
}
const useComment = () => {
  const createComment = async ({
    title,
    rating,
    comment,
    albumTitle,
    albumId,
    userId,
  }: CreateCommentsArguments) => {
    try {
      const resp = await fetch(
        "http://localhost:3000/api/comments/createComment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            albumTitle,
            albumId,
            userId,
            title,
            rating,
            comment,
          }),
        }
      );
      const data = await resp.json();
      console.log("here in useComment", data);
      return data;
    } catch (error: any) {
      return error.message;
    }
  };

  return { createComment };
};

export default useComment;