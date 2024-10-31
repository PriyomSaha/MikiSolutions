// components/Background.js
import React from "react";
import { styled } from "@mui/system";
import background from "../assets/images/background.jpg";

const BackgroundContainer = styled("div")({
  background: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${background})`,

  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: -1,
});

const Background = () => <BackgroundContainer />;

export default Background;
