"use client";
import { CircularProgress } from "@mui/material";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center">
      <CircularProgress color="success" />
    </div>
  );
}
