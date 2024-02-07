import React from "react";
import "./../assets/about.css";
import { Flex } from "@chakra-ui/react";
import missionimage from "./../assets/63df4ebe997f4_multicloud-1.png";
const aboutp1 =
  "    'KAALB TECHNOLOGIES  PRIVATE LIMITED' company started as stated from the name appears to combine 'Kube' from Kubernetes and 'Lancer' from freelancer.";
const aboutp2 =
  "    At Kubelancer, we're at the forefront of technology, specializing in all things Kubernetes, DevOps, and Cloud (AWS, GCP and AZURE).";
const aboutp3 =
  "    As a private limited company dedicated to helping businesses navigate the ever-evolving landscape of modern IT, we provide expert solutions that streamline operations, enhance scalability, and maximize efficiency. With a team of seasoned professionals who are passionate about harnessing the power of Kubernetes, mastering DevOps practices, and harnessing the potential of cloud technologies, we're here to elevate your digital journey. Whether you're a startup aiming to optimize your operations or an established enterprise looking to innovate, Kubelancer is your trusted partner for transformative technology solutions.";

const Aboutus = () => (
  <Flex className="about-section" flexDirection={"column"}>
    <Flex className="about-title">
      <text>About " Kaalb Technologies-Pvt-Ltd "</text>
    </Flex>

    <Flex direction={"row"} className="misson-container">
      <Flex className="about-text-container" flexDirection={"column"}>
        <div className="about-paragraph">
          <pre>{aboutp1}</pre>
        </div>

        <div className="about-paragraph">
          <pre>{aboutp2}</pre>
        </div>

        <div className="about-paragraph">
          <pre>{aboutp3}</pre>
        </div>
      </Flex>

      <Flex className="about-image-container"/>
    </Flex>
  </Flex>
);
export default Aboutus;
