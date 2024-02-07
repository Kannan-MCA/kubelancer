import React from "react";
import FullScreenSection from "./FullScreenSection";
import MissionandValueSection from './MissionandValueSection';
import OurExpertise from './OurExpertise';
import './../assets/landing.css';
import { Flex } from "@chakra-ui/react";
import Aboutus from "./Aboutus";
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="azure"
  >
<Aboutus/>
<MissionandValueSection/>
<OurExpertise/>
</FullScreenSection>

);
export default LandingSection;