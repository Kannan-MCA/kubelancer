import "./App.css";
import Aboutuspage from "./pages/Aboutuspage";
import Homepage from "./pages/Homepage";
import React from "react";
import { Box, Flex, HStack, Hide } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./assets/logo.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
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
        zIndex={1024}        
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
                <img
                  className="logo"
                  src={logo}
                  width={50}
                  height={50}
                  alt="Kubelancer"
                />
                <h1 className="App-header">Kaalb Technologies-Pvt-Ltd</h1>
              </HStack>
            </nav>
            <nav className="menu-bar">
              <HStack spacing={8}>
                <a href="/" text className="menu">
                  Home
                </a>
                <a href="/about" className="menu">
                  Services
                </a>
                <a href="/contact-us" className="menu">
                  Contact Us
                </a>
                <button className="contact-button">For Support </button>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>

      <Homepage />

      <Box
        position={"fixed"}
        left={0}
        right={0}
        bottom={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#2A4365"
      >
        <Flex className="footer" direction={"row"}>
          <Flex className="footer-element-right" direction={"column"}>
            <text className="footer-title-right">COMPANY</text>
            <text className="footer-content-right">About</text>
            <text className="footer-content-right">Careers</text>
            <text className="footer-content-right">Team</text>
          </Flex>

          <Flex className="footer-element-center" direction={"column"}>
            <text className="footer-title-center">SERVICES</text>
            <text className="footer-content-center">Kaalb Technologies-Pvt-Ltd</text>
            <text className="footer-content-center">Kaalb Technologies-Pvt-Ltd</text>
          </Flex>

          <Flex className="footer-element-left" direction={"column"}>
            <text className="footer-title-left">
              KAALB TECHNOLOGIES  PRIVATE LIMITED
            </text>
            <text className="footer-content-left">connect@kubelancer.com,</text>
            <text className="footer-content-left">+91-8043728358,</text>
            <text className="footer-content-left">
              #198, CMH Road, 2nd Floor, Suite No.928,
            </text>
            <text className="footer-content-left">Indiranagar, Bangalore,</text>
            <text className="footer-content-left">
              Karnataka, India 560038.
            </text>
          </Flex>
          <Flex className="footer-element-social" direction={"row"}>
            <FontAwesomeIcon className="icon" icon={faEnvelope} size="2x" />
            <FontAwesomeIcon
              className="icon"
              icon={faStackOverflow}
              size="2x"
            />
            <FontAwesomeIcon className="icon" icon={faGithub} size="2x" />
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          </Flex>
        </Flex>
        <Flex
          margin="0 auto"
          px={10}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          fontSize={10}
          height={16}
        >
          <p>KAALB TECHNOLOGIES  PRIVATE LIMITED • © 2023</p>
        </Flex>
      </Box>
    </div>
  );
}
export default App;
