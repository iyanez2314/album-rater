"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext, useEffect, useMemo, useState } from "react";
import AlbumReviewModalInput from "./AlbumReviewModalInput";
import AuthContext, {
  AuthenticationContext,
} from "../../../context/AuthContext";
import useComment from "../../../../hooks/useComment";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface State {
  albumTitle: string;
  albumId: string;
  userId: string | number;
  title: string;
  rating: string;
  comment: string;
  albumCover: string;
}

interface Props {
  albumId: string;
  albumName: string;
  albumCover: any;
  handleRefreshKey: () => void;
}

export default function AlbumReviewModal({
  albumId,
  albumName,
  albumCover,
  handleRefreshKey,
}: Props) {
  const { data } = useContext(AuthenticationContext);
  const { createComment, loading } = useComment();
  const [albumReview, setAlbumReview] = useState<State>({
    title: "",
    rating: "",
    comment: "",
    albumTitle: "",
    albumId: "",
    userId: "",
    albumCover: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    if (data) {
      setIsLoggedIn(true);
    }
  }, [data]);

  useEffect(() => {
    setAlbumReview({
      title: "",
      rating: "",
      comment: "",
      albumTitle: albumName || "",
      albumId: albumId || "",
      userId: data?.id || "",
      albumCover: albumCover || "",
    });
  }, [albumId, albumName, data]);

  const handleStars = (e: React.MouseEvent<HTMLButtonElement>) => {
    const starValue = e.currentTarget.dataset.stars || 0;
    setStars(Number(e.currentTarget.value));
    setAlbumReview((prev) => ({ ...prev, rating: starValue.toString() }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAlbumReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment(albumReview, () => {
      handleClose();
      if (handleRefreshKey) {
        handleRefreshKey();
      }
    });
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        className="text-white bg-[#1DB954] rounded p-2 font-thin hover:cursor-pointer hover:bg-[#1ed760] transition-all duration-200 ease-in-out"
        onClick={handleOpen}
      >
        Add Review
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AlbumReviewModalInput
            loading={loading}
            handleStars={handleStars}
            isLoggedIn={isLoggedIn}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            stars={stars}
          />
        </Box>
      </Modal>
    </div>
  );
}
