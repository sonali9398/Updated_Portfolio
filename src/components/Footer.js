import { Container, Row, Col } from "react-bootstrap";
import slogo from '../assets/img/Preview.png'
import navIcon1 from "../assets/img/nav-icon1.svg";
import icon from "../assets/img/icon.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={slogo} alt="Logo" className="footerlogo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://in.linkedin.com/in/sonali-karangutkar" target="blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/sonali9398" target="blank"><img src={icon} alt="" /></a>
                <a href="https://www.instagram.com/sonali_karangutkar/" target="blank"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
