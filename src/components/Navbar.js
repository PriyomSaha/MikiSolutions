import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Hidden,
} from "@mui/material";
import { Menu as LucideMenu } from "lucide-react";
import { Link } from "react-scroll";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navButton = {
    color: "white",
    fontWeight: "bold",
    // borderBottom: "1px solid white",
    // borderRight: "1px solid white",
    marginRight: 2,
  };
  // Handle background color change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change 100 to your desired threshold
        setBackgroundColor("rgba(25, 43, 109, 0.9)"); // New color on scroll
      } else {
        setBackgroundColor("transparent"); // Original color
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 9999,
        backgroundColor: backgroundColor,
        transition: "background-color 0.3s ease",
      }}
      elevation={0}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        {/* <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
          IT Solutions
        </Typography> */}
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{ height: 40, marginRight: 2 }}
        />
        <Hidden smDown>
          <Link to="home" smooth={true} duration={500}>
            <Button sx={navButton}>Home</Button>
          </Link>
          <Link to="services" smooth={true} duration={500} offset={-50}>
            <Button sx={navButton}>Services</Button>
          </Link>
          <Link to="whyus" smooth={true} duration={500}>
            <Button sx={navButton}>Why Choose Us</Button>
          </Link>
          <Link to="contactus" smooth={true} duration={500}>
            <Button sx={navButton}>Contact</Button>
          </Link>
        </Hidden>
        <Hidden smUp>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenuOpen}
            aria-label="menu"
          >
            <LucideMenu color="white" strokeWidth="3" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <Link to="home" smooth={true} duration={500}>
              <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            </Link>
            <Link to="services" smooth={true} duration={500} offset={-64}>
              <MenuItem onClick={handleMenuClose}>Services</MenuItem>
            </Link>
            <Link to="whyus" smooth={true} duration={500} offset={-64}>
              <MenuItem onClick={handleMenuClose}>Why Choose Us</MenuItem>
            </Link>
            <Link to="contactus" smooth={true} duration={500} offset={-50}>
              <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
            </Link>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
