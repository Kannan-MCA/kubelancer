import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./../assets/logo.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
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
          <text className="footer-content-center">DevOps</text>
          <text className="footer-content-center">Cloud Native</text>
          <text className="footer-content-center">Kubernetes</text>
          <text className="footer-content-center">MultiCloud</text>
        </Flex>

        <Flex className="footer-element-left" direction={"column"}>
          <text className="footer-title-left">KAALB TECHNOLOGIES  PRIVATE LIMITED</text>
          <text className="footer-content-left">kaalbtechnology@gmail.com,</text>
          <text className="footer-content-left">+91-9739681115,</text>
          <text className="footer-content-left">
            #198, CMH Road, 2nd Floor, Suite No.928,
          </text>
          <text className="footer-content-left">Indiranagar, Bangalore,</text>
          <text className="footer-content-left">Karnataka, India 560038.</text>
        </Flex>
        <Flex className="footer-element-social" direction={"row"}>
          <FontAwesomeIcon className="icon" icon={faEnvelope} size="2x" />
          <FontAwesomeIcon className="icon" icon={faStackOverflow} size="2x" />
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
        height={18}
      >
        <p>KAALB TECHNOLOGIES  PRIVATE LIMITED • © 2023</p>
      </Flex>
    </Box>
  );
};
export default Footer;
