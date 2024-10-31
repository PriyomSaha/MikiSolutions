import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CardSlideshow from "./CardSlideshow";

function Services() {
  const ServiceContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "90vh",
    color: "white",
    textAlign: "center",
    padding: "1rem",
  });

  return (
    <>
      <ServiceContainer name="services" sx={{ height: "auto" }}>
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
          Our Services
        </Typography>

        <Box className="descriptionTextContainer" mb={2}>
          <Typography variant="body2">
            Explore our range of innovative IT solutions designed to enhance
            your business operations and drive growth. From custom cloud
            solutions to comprehensive managed IT services, we have you covered.
          </Typography>
        </Box>
        <CardSlideshow />
      </ServiceContainer>
    </>
  );
}

export default Services;
