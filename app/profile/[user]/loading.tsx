"use client";
import React from "react";
import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <CircularProgress color="success" />
    </div>
  );
}
