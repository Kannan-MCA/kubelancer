import React from "react";
import './../assets/expertise.css';
import { Flex } from "@chakra-ui/react";
import Card from "./Card";
const OurExpertise = () => (

   
   <Flex className="expertise-text-container" flexDirection={"column" }>
   <div className="expertise-title">
   <text>Our Core Expertise </text>
   </div>
   <text> We are strongly focused on DevOps and Infrastructure Engineering. Our core expertise is around AWS Amazon, Kubernetes, Infrastructure as a Code, and Security.</text>
   <Card/>
   </Flex>

   
);
export default OurExpertise;