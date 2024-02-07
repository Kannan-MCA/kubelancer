import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "./../assets/logo.png";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="azure"
      border={5}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          fontSize={"2vh"}
          fontWeight={"bold"}
          
        >
          <nav>
          <HStack spacing={8}>
      <img className="logo" src={logo} width={50}height={50} alt="kaalb"/>
          <h1 className="App-header">Kaalb Technologies Pvt.Ltd</h1>
          </HStack>
          </nav>
          <nav className="menu-bar">
            <HStack spacing={8}>
            <a href='/' text className="menu">Home</a>
            <a href="/about"  className="menu">Services</a>
            <a href="/contact-us"  className="menu">Contact Us</a>
              <button className="contact-button">Contact for support </button>
            </HStack>
          </nav>
        </HStack>
        
      </Box>
    </Box>
  );
};
export default Header;
