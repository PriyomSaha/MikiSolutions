// App.js
import React from "react";
import { Container } from "@mui/material";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactUs from "./components/ContactUs";

const App = () => (
  <Container disableGutters>
    <Background />
    <Navbar />
    <Content />
    <Services />
    <WhyChooseUs />
    <ContactUs />
  </Container>
);

export default App;
