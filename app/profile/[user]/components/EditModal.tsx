"use client";
import { useContext, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { CircularProgress } from "@mui/material";
import { Edit } from "react-feather";
import { Comments } from "../page";
import EditModalInputs from "./EditModalInputs";
import useUpdateComment from "../../../../hooks/useUpdateComment";
import useDeleteComment from "../../../../hooks/useDeleteComment";
import { AuthenticationContext } from "../../../context/AuthContext";
import useFetchUserComments from "../../../../hooks/useFetchUserComments";

interface State {
  title: string;
  body: string;
  id: number;
}
interface Props {
  comment: Comments;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  height: 500,
};

export default function EditModal({ comment }: Props) {
  const { updateComment, loading } = useUpdateComment();
  const { data } = useContext(AuthenticationContext);
  const { refreshData } = useFetchUserComments(data);
  const { deleteComment } = useDeleteComment();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputs, setInputs] = useState<State>({
    title: comment.title,
    body: comment.body,
    id: comment.id,
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateComment(inputs);
    refreshData();
    handleClose();
  };
  const handleDelete = async (commentId: number) => {
    await deleteComment(commentId);
    refreshData();
    handleClose();
  };
  return (
    <div>
      <Edit
        className="text-[#1DB954] hover:cursor-pointer"
        size={20}
        onClick={handleOpen}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="p-5 flex justify-center flex-col rounded">
            <EditModalInputs
              handleDelete={handleDelete}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              comment={comment}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
