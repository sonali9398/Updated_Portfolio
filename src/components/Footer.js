

import { Container, Row, Col } from "react-bootstrap";
import slogo from '../assets/img/Preview.png';
import navIcon1 from "../assets/img/nav-icon1.svg"
import icon from "../assets/img/icon.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import resume from '../assets/img/resume.svg'
import resumePDF from '../assets/img/Sonali_FullStack.pdf';



export const Footer = () => {
  return (
    <footer className="footer">
      <Container >
        <div className="flex justify-between">
          <div className="">
            <img src={slogo} alt="Logo" className="footerlogo" />
          </div>
          <div size={12} sm={6} className="text-center text-sm-end flex justify-end">
            <div className="social-icon">
              <a href="https://in.linkedin.com/in/sonali-karangutkar" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/sonali9398" target="_blank" rel="noopener noreferrer">
                <img src={icon} alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/sonali_karangutkar/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
              {/* Link to download or open resume */}
              <a href={resumePDF} download="Sonali_Karangutkar_Resume.pdf" className="resume-download">
                <img src={resume} alt="resume" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
