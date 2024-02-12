import React from "react";
import FullScreenSection from "./FullScreenSection";
import './../assets/mission.css';
import { Flex } from "@chakra-ui/react";
const MissionandValueSection = () => (

   
   <Flex className="mission-section" flexDirection={"column"}>
   <Flex>
   <text className="mission-title">Our Mission & Values</text>
   </Flex>
   
    <Flex direction={"row"} className="misson-container">
    
   <div className="mission-text-container">
   <div className="mission-text">
   <text>       Naviteq's mission is to implement cutting-edge DevOps and infrastructure solutions that are optimal for customers' needs within the shortest possible time.
   Our ambition is to help companies establish a strong technological basis for providing reliable online services. 
   Working towards our goal we rely on up-to-date technologies for accomplishing routine tasks. 
   We advocate for the persistent development and professional growth of our employees.
   
   </text>
   </div>
   </div>
   

   <Flex className="mission-image-container">
   </Flex>
   </Flex>
   <Flex  className="misson-inner-container"/>
</Flex>
   );
    export default MissionandValueSection;