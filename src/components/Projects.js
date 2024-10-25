import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import js from "../assets/img/js.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import code1 from '../assets/img/code1.jpg';
import react from '../assets/img/react.png'

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Youtube",
      description: "Video streaming platform with video search, live chat, and comment functionality",
      imgUrl: react,
      projectUrl:'https://final-youtube.vercel.app/',

    },
    {
      title: "API Testing App",
      description: "Built an API testing platform supporting methods for accurate response validation",
      imgUrl: react,
      projectUrl:'https://api-testing-flax.vercel.app/page1',
    }]

    const projects2 = [
    {
      title: "Notes Maker",
      description: "Simple notes app built with JavaScript to create and manage notes",
      projectUrl: "https://sonali9398.github.io/NotesMaker/",
      imgUrl: js,
    },
    {
      title: "Sushi Restaurant Website",
      projectUrl: "https://sushi-wngf.vercel.app/",
      imgUrl: js,
      description:"A Sushi Restaurant website landing page display menu and restaurant information."
    },
    {
      title: "Video Calling App",
      projectUrl: "https://github.com/sonali9398/WebRTC-with-Backend",
      imgUrl: js,
      description:"A video calling website built with JavaScript, Node.js, Express.js, and Socket.io for real-time communication"
    }]

    const projects3 = [
    {
      title: "NLP to SQL",
      projectUrl: "https://github.com/sonali9398/NLP",
      imgUrl: code1,
      description:"Built with Flask, using the Gemini model to convert natural language queries into SQL",
    },
    {
      title: "Code Generator App",
      projectUrl: "https://github.com/sonali9398/Code-Generator",
      imgUrl: code1,
      description:"Built with Flask, to generate code from input prompts."
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below are the projects developed using React, JavaScript, and Generative AI (GenAI). Each project showcases innovative applications and solutions leveraging these technologies to enhance user experience and functionality.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center " id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">React </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">GenAi</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="right" src={colorSharp2}></img>
    </section>
  )
}
