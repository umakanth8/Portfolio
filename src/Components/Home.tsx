import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import Type from './Type';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import { RiContactsLine } from "react-icons/ri";
import { MdDownloadForOffline } from "react-icons/md";
import "../App.css";
import img from './uma.jpeg';
import {  Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt } from "react-icons/fa";

const pdfUrl = process.env.PUBLIC_URL + '/Assets/resume_uk.pdf';


const Home = () => {
  const coder = {
    name: 'Umakanth Pangala',
    skills: ['React', 'Java', 'SpringBoot', 'MySql', 'Docker', 'AWS'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
      return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contactme");
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section>
      <Container fluid content='home-section' id='home'>
      <div className="row align-items-center" style={{ minHeight: '100vh', paddingTop: '10vh' }}>
  {/* Left Section */}
  <div className="col-lg-6 col-md-12 text-center text-md-start mb-4">
    <h1 className="display-4 text-white fw-bold">
      Hi, I'm <span className="text-primary">Umakanth</span>
      <Type />
    </h1>

            <div className="d-flex justify-content-center mt-4">
  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id="github-tooltip">GitHub</Tooltip>}
  >
    <a href="https://github.com/umakanth8/" target="_blank" rel="noopener noreferrer" className="mx-2">
      <FaGithub size={30} style={{ color: "white" }} />
    </a>
  </OverlayTrigger>

  <OverlayTrigger
    placement="top"
    overlay={<Tooltip id="linkedin-tooltip">LinkedIn</Tooltip>}
  >
    <a href="https://www.linkedin.com/in/umakanth-pangala-16504717a/" target="_blank" rel="noopener noreferrer" className="mx-2">
      <FaLinkedin size={30} style={{ color: "white" }} />
    </a>
  </OverlayTrigger>

  <OverlayTrigger
  placement="top"
  overlay={<Tooltip id="leetcode-tooltip">LeetCode</Tooltip>}
>
<a
  href="https://leetcode.com/umakanth87/"
  target="_blank"
  rel="noopener noreferrer"
  style={{ color: "cyan", fontSize: "20px" }}
  className="mx-2"
>
  <img
    src={`${process.env.PUBLIC_URL}/Assets/lc.png`}
    alt="LeetCode"
    style={{
      verticalAlign: "middle",
      width: "30px",
      height: "30px",
      marginRight: "8px",
    }}
  />
</a>

</OverlayTrigger>


  <Button
    variant="light"
    className='hover-transform'
    href={pdfUrl}
    style={{
      fontWeight: "bold",
      padding: "10px 20px",
      border: "1px solid black",
      borderRadius: "50px",
    }}
  >
    Get Resume <MdDownloadForOffline size={20} />
  </Button>
</div>
</div>

          {/* Right Section (Image in circle) */}
          <div className="col-lg-6 col-md-12 text-center">
            <div 
              className="d-flex justify-content-center align-items-center"
              style={{ height: '100%' }}
            >
              <img
                src={img} // Replace with the path to your image
                alt="Umakanth Pangala"
                className="rounded-circle"
                style={{
                  width: '350px',
                  height: '350px',
                  objectFit: 'cover',
                  border: '5px solid white',
                }}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Other Sections */}
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
   
    </section>
  );
};

export default Home;
