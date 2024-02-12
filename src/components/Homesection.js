import React from "react";
import FullScreenSection from "./FullScreenSection";
import OurExpertise from "./OurExpertise";
import "./../assets/homesection.css";
import kubernetes from "./../assets/kubernete.svg";
import { Flex } from "@chakra-ui/react";
const Homesection = () => (
  <div>
    <div className="home-container">
      <div className="title-container">
        <div>
          <text className="title"> We Construct And Care Your Cloud Infrastructure </text>{" "}
        </div>
        <div>
          <text className="content"> Best in Class DevOps as a Service and DevOps Solutions Provider</text>
        </div>

        <div>
          <button className="read-button">Read More </button>
        </div>
      </div>
    </div>
    <div className="service-container">
      <div className="dev-ops-container">
        <text> DevOps as a Service</text>
      </div>
      <Flex>
        <div className="deveops-content-container">
          <text>
            We help development teams, product companies, and start-ups to focus
            on innovation by taking care of their infrastructure and operational
            needs. From maturity assessments, consulting, cloud migration,
            tooling to organizational change, and ongoing optimization of
            operations.
          </text>
          <div>
            <button className="read-button">Read More </button>
          </div>
        </div>

        <div className="deveops-image-container">
          <text></text>
          <div className="deveops-image-inner-container" />
        </div>
      </Flex>

      <div className="cloud-container">
        <text> Cloud Native Architecture </text>
      </div>
      <Flex>
        <div className="cloud-image-container">
          <div className="cloud-image-inner-container" />
          <text></text>
        </div>
        <div className="cloud-content-container">
          <text>
            Get the most out of cloud computing with our cloud infrastructure
            design services. Our engineers develop, provision, and maintain
            modern, secured, and automated infrastructure on top of such cloud
            providers like AWS, Azure, GCP.
          </text>
          <div>
            <button className="read-button">Read More </button>
          </div>
        </div>
      </Flex>

      <div className="kub-container">
  <text> Kubernetes Management </text>
</div>
<Flex>
  <div className="kub-content-container">
    <text>
      As Kubernetes implementation experts we offer consulting services and
      help companies achieve their DevOps and Infrastructure goals,
      providing expert advice on adopting cost-efficient Kubernetes
      solutions across different clouds and on-premises.
    </text>
    <div>
      <button className="read-button">Read More </button>
    </div>
  </div>
  <div className="kub-image-container">
    <div className="kub-image-inner-container" />
    <text></text>
  </div>

  <div className="kub-container"></div>
</Flex>
    </div>
  </div>
);
export default Homesection;
