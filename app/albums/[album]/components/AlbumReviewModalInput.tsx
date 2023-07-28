interface Props {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoggedIn: boolean;
}

export default function AlbumReviewModalInput({
  handleInputChange,
  handleSubmit,
  isLoggedIn,
}: Props) {
  return (
    <div>
      <h4 className="text-md font-semibold">
        {isLoggedIn ? "" : "Please Login Before You Make a Comment"}
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="Title"
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="bg-white border rounded p-2 py-3 w-full"
            placeholder="Rating"
            name="rating"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3 flex justify-between text-sm">
          <textarea
            className="bg-white border rounded p-2 py-3 w-full"
            placeholder="Tell us how you really feel..."
            name="comment"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={!isLoggedIn}
          className={
            isLoggedIn
              ? "bg-[#1DB954] text-white rounded p-2 font-thin hover:cursor-pointer hover:bg-[#1ed760] transition-all duration-200 ease-in-out"
              : "bg-[#1DB954] text-white rounded p-2 font-thin hover:cursor-not-allowed hover:bg-[#1ed760] transition-all duration-200 ease-in-out"
          }
        >
          Comment
        </button>
      </form>
    </div>
  );
}
