import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/system/Grid";
import SoftwareDevelopment from "../assets/images/SoftwareDevelopment.svg";
import ManagedServices from "../assets/images/ManagedServices.svg";
// import Cybersecurity from "../assets/images/Cybersecurity.svg";
import Cloud from "../assets/images/Cloud.svg";
import Network from "../assets/images/Network.svg";
import Staffing from "../assets/images/Staffing.svg";
import AI from "../assets/images/AI.svg";
import MobileApp from "../assets/images/MobileApp.svg";
import WebDevelopment from "../assets/images/WebDevelopment.svg";

const cardsData = [
  {
    id: 1,
    title: "Custom Software Development",
    text: "Scalable software solutions for exceptional user experiences.",
    expandedText:
      "We develop scalable, high-performance software solutions that streamline your operations and deliver an exceptional user experience. From web and mobile applications to enterprise software, our team ensures your projects are delivered on time and within budget.",
    svgUrl: SoftwareDevelopment,
  },
  {
    id: 2,
    title: "Mobile App Development",
    text: "Innovative apps to reach customers on any device.",
    expandedText:
      "Reach your customers wherever they are with innovative mobile applications. We specialize in building intuitive and engaging apps for iOS, Android, and cross-platform solutions, ensuring seamless user interactions.",
    svgUrl: MobileApp,
  },
  {
    id: 7,
    title: "Web Development",
    text: "Professional websites to enhance your online presence.",
    expandedText:
      "Elevate your online presence with a professionally crafted website. Our team builds responsive, SEO-friendly, and visually appealing sites designed to engage users and drive conversions. Whether it’s a corporate site, an e-commerce platform, or a personal blog, we ensure a seamless and impactful web experience.",
    svgUrl: WebDevelopment,
  },
  {
    id: 3,
    title: "Managed IT Services",
    text: "Proactive IT management to keep your business secure.",
    expandedText:
      "Let us manage your IT infrastructure so you can focus on what you do best. Our managed services include proactive monitoring, cybersecurity, cloud services, and IT support to ensure your business runs smoothly and securely.",
    svgUrl: ManagedServices,
  },
  {
    id: 4,
    title: "AI & Machine Learning Solutions",
    text: "Data-driven AI and ML solutions to elevate decisions.",
    expandedText:
      "Unlock the power of data with AI and ML capabilities that help you gain insights, automate processes, and drive smarter decision-making. Our team can develop tailored algorithms to enhance your product offerings and business processes.",
    svgUrl: AI,
  },
  {
    id: 5,
    title: "Consulting & IT Strategy",
    text: "Strategic guidance for sustainable technology growth.",
    expandedText:
      "Navigate the complexities of digital transformation with confidence. Our expert consultants work with you to develop IT strategies that align with your business goals, ensuring sustainable growth and technology adoption.",
    svgUrl: Cloud,
  },
  {
    id: 6,
    title: "Network Solutions",
    text: "Reliable, scalable networks for secure connectivity.",
    expandedText:
      "At Miki Solutions, we provide reliable and secure network solutions to keep your website fast, secure, and always accessible. Our services include high-performance hosting, CDN integration for quick global access, advanced security measures like DDoS protection, load balancing for seamless traffic management, and VPN setups for secure access. Designed to scale with your business, our network solutions ensure your site stays responsive, safe, and ready for growth.",
    svgUrl: Network,
  },

  {
    id: 8,
    title: "Staffing Services",
    text: "Connect with top IT talent for your project needs.",
    expandedText:
      "Finding the right talent for your IT projects can be a daunting task. Let us take care of it for you. Our staffing services connect you with highly skilled professionals who have the expertise and experience to meet your project requirements. Whether you need temporary resources or long-term placements, we have a vast network of qualified IT professionals ready to support your business objectives.",
    svgUrl: Staffing,
  },
];

const StyledCard = styled(Card)(({ flipped }) => ({
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  width: 280,
  height: 360,
  position: "relative",
  color: "#192b6d",
  boxShadow: "0px 0px 30px rgba(227, 228, 237, 0.27)",
  background: "#f9f9f9",
  cursor: "pointer",
}));

const CardFront = styled(Box)({
  backfaceVisibility: "hidden",
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const CardBack = styled(Box)({
  //   backfaceVisibility: "hidden",
  //   transform: "rotateY(180deg)",
  //   position: "absolute",
  //   width: "100%",
  //   height: "100%",
  //   padding: "16px",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   textAlign: "center",
  backfaceVisibility: "hidden",
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const CardSlideshow = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleReadMore = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <Grid container justifyContent="center" margin={"auto"} spacing={3}>
      {cardsData.map((card) => (
        <Grid item key={card.id} sm={12}>
          <StyledCard
            flipped={flippedCard === card.id}
            // onClick={() => handleReadMore(card.id)}
          >
            {/* Front of the Card */}
            <CardFront
              style={{ display: flippedCard === card.id ? "none" : "flex" }}
            >
              <CardMedia
                component="img"
                image={card.svgUrl}
                alt={card.title}
                sx={{ width: 200, height: "auto", mt: 2 }}
              />
              <CardContent sx={{ mt: 1 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2">
                  {card.text.substring(0, 120)}...
                </Typography>
                <Button
                  size="small"
                  //   endIcon={<ArrowForwardIcon />}
                  onClick={() => handleReadMore(card.id)}
                  sx={{ color: "#973850", mt: 2 }}
                >
                  Read More...
                </Button>
              </CardContent>
            </CardFront>

            {/* Back of the Card */}
            <CardBack
              style={{ display: flippedCard === card.id ? "flex" : "none" }}
            >
              <CardContent
                style={{
                  transform: "rotateY(180deg)",
                  transition: "transform 0.7s",
                }}
              >
                <Typography variant="body2">{card.expandedText}</Typography>
              </CardContent>
              <Button
                size="small"
                onClick={() => handleReadMore(card.id)}
                style={{
                  transform: "rotateY(180deg)",
                  transition: "transform 0.7s",
                  color: "#973850",
                }}
              >
                Go Back
              </Button>
            </CardBack>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSlideshow;
