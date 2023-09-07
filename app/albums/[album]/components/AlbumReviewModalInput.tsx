import { Star } from "react-feather";

interface Props {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoggedIn: boolean;
  handleStars: (e: React.MouseEvent<HTMLButtonElement>) => void;
  stars: number;
  loading: boolean;
}

export default function AlbumReviewModalInput({
  handleInputChange,
  handleSubmit,
  handleStars,
  stars,
  isLoggedIn,
  loading,
}: Props) {
  return (
    <div>
      <h4 className="text-md font-semibold text-[#84A59D]">
        {isLoggedIn ? "" : "Please Login Before You Make a Comment"}
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="my-3 flex flex-col justify-between text-sm">
          <label>Title</label>
          <input
            type="text"
            className="bg-white border rounded p-2 py-3 w-[49%]"
            placeholder="..."
            name="title"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3 flex flex-col justify-between text-sm">
          <label>Comment</label>
          <textarea
            className="bg-white border rounded p-2 py-3 w-full"
            placeholder="Tell us how you really feel..."
            name="comment"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="my-3 flex gap-2 text-sm mb-3">
          {[...Array(5)].map((_, i) => (
            <button
              data-stars={i + 1}
              key={i}
              type="button"
              value={i + 1}
              name="rating"
              onClick={handleStars}
            >
              <Star
                fill={i + 1 <= stars ? "#F5CAC3" : "#fafafa"}
                className={i + 1 <= stars ? "text-[#F5CAC3]" : "text-gray-400"}
              />
            </button>
          ))}
        </div>
        <button
          type="submit"
          disabled={!isLoggedIn}
          className={
            isLoggedIn
              ? "bg-[#84A59D] text-white  rounded p-2 font-thin hover:cursor-pointer hover:bg-[#84A59D] transition-all duration-200 ease-in-out"
              : "bg-[#84A59D] text-white rounded p-2 font-thin hover:cursor-not-allowed hover:bg-[#84A59D] transition-all duration-200 ease-in-out"
          }
        >
          {loading ? "submiting..." : "Submit Comment"}
        </button>
      </form>
    </div>
  );
}
