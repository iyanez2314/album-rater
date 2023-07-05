"use client";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import AuthInput from "./AuthInput";

interface Props {
  login: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ login }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const renderContent = (signInContent: string, signUpContent: string) => {
    return login ? signInContent : signUpContent;
  };

  const handleClick = () => {
    if (login) {
      // handle login
    } else {
      // handle signup
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>{login ? "Login" : "Signup"}</Button>
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
          <Box sx={style}>
            <p className="text-2xl">
              {renderContent("Sign In", "Create Account")}
            </p>
            <AuthInput
              login={login}
              inputs={inputs}
              handleInputChange={handleInputChange}
            />
            <button className="uppercase bg-[#1DB954] text-white p-3 rounded text-sm mb-5">
              {renderContent("Sign In", "Create Account")}
            </button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
