import React from "react";
import FullScreenSection from "./FullScreenSection";
import MissionandValueSection from "./MissionandValueSection";
import OurExpertise from "./OurExpertise";
import "./../assets/homesection.css";
import kubernetes from "./../assets/kubernete.svg";
import {
  Flex,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Heading,
  ButtonGroup,
  Button,
  Stack,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
const Homesection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="azure"
  >
    <Flex direction={"column"}>
      <div className="home-container">
        <div className="home-title">
          <text> We Construct And Care Your Cloud Infrastructure </text>
        </div>
        <div className="home-text">
          <text>
            Best in Class DevOps as a Service and DevOps Solutions Provider
          </text>
          <div>
            <button className="home-button">Schedule Meeting</button>
          </div>
        </div>
      </div>
    </Flex>

    <div className="dev-ops-container">
      <text> DevOps as a Service</text>
    </div>
    <Flex>
      <div className="deveops-content-container">
        <text>
          We help development teams, product companies, and start-ups to focus
          on innovation by taking care of their infrastructure and operational
          needs. From maturity assessments, consulting, cloud migration, tooling
          to organizational change, and ongoing optimization of operations.
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

    <flex>
      <div className="container">
        <text> What we offers </text>
      </div>
      <div className="contant-container">
        <text>
          Enhance your operational processes and get stability, durability, and
          availability for the core operations with pure-play cloud solutions
          and tools.
        </text>
      </div>

      <Flex direction={"row"} justifyContent={"center"} marginTop={"50px"}>
        <Card
          maxWidth={"35vb"}
          border={"1px"}
          borderColor={"#000000"}
          alignContent={"center"}
          align={"center"}
        >
          <CardBody align={"center"}>
            <Image src={kubernetes} alt="kubernetes" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color="#2a4365">
                Kubernetes Cluster Management
              </Heading>
              <Text color="#2a4365" fontSize="8xl" width="2xl">
                Deploying any type of cloud managed or on-premises Kubernetes
                clusters. Kubernetes performance tuning and issue resolving.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button className="read-button">Read More</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card
          maxWidth={"35vb"}
          border={"1px"}
          borderColor={"#000000"}
          alignContent={"center"}
          align={"center"}
        >
          <CardBody align={"center"}>
            <Image src={kubernetes} alt="kubernetes" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color="#2a4365">
                Infrastructure as a Code and Automations
              </Heading>
              <Text color="#2a4365" fontSize="8xl" width="2xl">
                Development of cloud infrastructure with Terraform or Pulumi.
                Сreating of complex Terraform layouts by following industry best
                practices.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="10">
              <Button className="read-button">Read More</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card
          maxWidth={"35vb"}
          border={"1px"}
          borderColor={"#000000"}
          alignContent={"center"}
          align={"center"}
        >
          <CardBody align={"center"}>
            <Image src={kubernetes} alt="kubernetes" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color="#2a4365">
                Monitoring and Log Management
              </Heading>
              <Text color="#2a4365" fontSize="8xl" width="2xl">
                Log aggregation and management with the help of EFK & ELK
                stacks. Monitoring, alerting, and reporting to Slack or
                OpsGenie.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button className="read-button">Read More</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>

      <Flex direction={"row"} justifyContent={"center"} marginTop={"50px"}>
        <Card
          maxWidth={"35vb"}
          border={"1px"}
          borderColor={"#000000"}
          alignContent={"center"}
          align={"center"}
        >
          <CardBody align={"center"}>
            <Image src={kubernetes} alt="kubernetes" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color="#2a4365">
                Enterprise-Grade Security for Kubernetes
              </Heading>
              <Text color="#2a4365" fontSize="8xl" width="2xl">
                Authorization and authentification to both Cloud and Kubernetes
                via any type of SSO. Secret management, resource isolation.
                Istio and Service Mesh
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button className="read-button">Read More</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card
          maxWidth={"35vb"}
          border={"1px"}
          borderColor={"#000000"}
          alignContent={"center"}
          align={"center"}
        >
          <CardBody align={"center"}>
            <Image src={kubernetes} alt="kubernetes" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color="#2a4365">
                Kubernetes Native Deployments
              </Heading>
              <Text color="#2a4365" fontSize="8xl" width="2xl">
                Implementation of GitOps practices and Kubernetes native
                Deployments. Automation of CI/CD pipelines with Jenkins, Gitlab,
                or ArgoCD.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="10">
              <Button className="read-button">Read More</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card
          maxWidth={"35vb"}
          border={"1px"}
          borderColor={"#000000"}
          alignContent={"center"}
          align={"center"}
        >
          <CardBody align={"center"}>
            <Image src={kubernetes} alt="kubernetes" />
            <Stack mt="6" spacing="3">
              <Heading size="md" color="#2a4365">
                Infrastructure Design and Cloud Migration
              </Heading>
              <Text color="#2a4365" fontSize="8xl" width="2xl">
                Lift and shift from on-premises to Clouds. Architecture design
                and professional consultancy. Best practices end-to-end tech
                stack for AWS, Azure, and GCP.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button className="read-button">Read More</Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Flex>
    </flex>
    <flex>
      <div className="container">
        <text> Our clients </text>
      </div>
    </flex>
    <flex>
      <div className="container">
        <text> Meet our partners </text>
      </div>
    </flex>
  </FullScreenSection>
);
export default Homesection;
