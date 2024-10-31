import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const ServiceContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  color: "white",
  textAlign: "center",
  padding: "1rem",
});

const WhyChooseUs = () => {
  return (
    <ServiceContainer id="whyus">
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3rem",
          },
          textAlign: "start", // Aligns header text to the left
        }}
      >
        Why Us ?
      </Typography>

      <Box
        className="descriptionTextContainer"
        sx={{
          textAlign: "start", // Aligns all content in the Box to the left
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "700px",
            lg: "900px",
            xl: "1000px",
          },
        }}
      >
        <Box sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h5" sx={{ textAlign: "start" }}>
            01. Expert Team
          </Typography>
          <Typography variant="body1">
            Our team of seasoned professionals brings a wealth of experience and
            knowledge, ensuring that every project meets the highest standards.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h5" sx={{ textAlign: "start" }}>
            02. Customer-Centric Approach
          </Typography>
          <Typography variant="body1">
            We prioritize your business goals and strive to build tailored
            solutions that are fully aligned with your vision, ensuring we
            deliver maximum value at each and every step of the process.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h5" sx={{ textAlign: "start" }}>
            03. Innovation-Driven
          </Typography>
          <Typography variant="body1">
            We stay ahead of the curve with the latest technologies and trends,
            ensuring our solutions are future-ready and competitive.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "1.5rem" }}>
          <Typography variant="h5" sx={{ textAlign: "start" }}>
            04. Reliable Support
          </Typography>
          <Typography variant="body1">
            From development to deployment and beyond, our support team is
            dedicated to providing assistance whenever you need it.
          </Typography>
        </Box>
      </Box>
    </ServiceContainer>
  );
};

export default WhyChooseUs;
