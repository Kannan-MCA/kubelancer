import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./../assets/cardstyle.css";
import React from "react";

const Card = ({ title}) => {
  <div className="card">
  <Text>{title}</Text>
  <FontAwesomeIcon className="icon" icon={faArrowRight} size="2x"/>
</div>
  
};

export default Card;
