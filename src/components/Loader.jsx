import { Stack } from "@mui/material";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <img src="/logo.png" width={100} />
      <ClipLoader color="#22a6b3" size={40} />
    </Stack>
  );
};

export default Loader;
