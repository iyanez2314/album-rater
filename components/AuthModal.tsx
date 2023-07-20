"use client";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import AuthInput from "./AuthInput";
import useAuth from "../hooks/useAuth";

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
  const { signup, logout, singin } = useAuth();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (login) {
      // handle login
    } else {
      // handle signup
      signup(inputs);
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
              handleSubmit={handleSubmit}
              login={login}
              inputs={inputs}
              handleInputChange={handleInputChange}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
