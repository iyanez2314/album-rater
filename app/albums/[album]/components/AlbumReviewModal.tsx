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

export default function AlbumReviewModal({
  albumId,
  albumName,
  albumCover,
}: {
  albumId: string;
  albumName: string;
  albumCover: any;
}) {
  const { data } = useContext(AuthenticationContext);
  const { createComment } = useComment();
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
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAlbumReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createComment(albumReview);
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
            isLoggedIn={isLoggedIn}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Modal>
    </div>
  );
}
