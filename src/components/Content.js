// components/Content.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-scroll";

const ContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  color: "white",
  textAlign: "center",
  padding: "1rem",
});

const Content = () => (
  <ContentContainer id="home">
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontSize: {
          xs: "2rem", // Small screens
          sm: "2.5rem", // Medium screens
          md: "3rem", // Larger screens
        },
      }}
    >
      Welcome to Miki Solutions
      <Typography
        sx={{
          fontSize: {
            xs: "1rem", // Small screens
            sm: "1.25rem", // Medium screens
            md: "1.5rem", // Larger screens
          },
        }}
      >
        Your Partner in Digital Transformation
      </Typography>
    </Typography>

    <Box
      sx={{
        //     display: "flex",
        //     justifyContent: "space-between", // Ensures even spacing
        //     flexDirection: "column", // Stack items vertically
        maxWidth: {
          xs: "100%", // Full width for extra small screens
          sm: "100%", // Full width for small screens
          md: "700px", // Adjusted max width for medium screens
          lg: "900px", // Adjusted max width for large screens
          xl: "1000px", // Adjusted max width for extra large screens
        },
        mb: 1,
      }}
      className="descriptionTextContainer"
    >
      <Typography variant="body2" gutterBottom>
        At Miki Solutions, we are committed to empowering businesses through
        cutting-edge software and IT solutions. Our mission is to transform your
        ideas into reality by leveraging the latest in technology, tailored to
        meet your unique needs. Whether you’re a startup seeking a digital
        foundation or an established enterprise aiming to optimize operations,
        we are here to provide the expertise you need.
      </Typography>
    </Box>

    <Link to="services" smooth={true} duration={500} offset={-64}>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Link>
  </ContentContainer>
);

export default Content;
