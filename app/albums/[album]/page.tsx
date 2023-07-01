import AlbumCover from "./components/AlbumCover";
import AlbumData from "./components/AlbumData";
import CommentSection from "./components/CommentSection";

interface Props {
  params: {
    album: string;
  };
}

export default function page({ params }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Album Cover */}
      <AlbumCover />
      {/* Album Data Component */}
      <AlbumData />
      {/* Comment Section Component */}
      <CommentSection />
    </div>
  );
}
