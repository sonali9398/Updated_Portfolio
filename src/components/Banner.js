import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Banner.css';
import './NewBanner.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [animateClass, setAnimateClass] = useState('');
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility once={false} partialVisibility>
              {({ isVisible }) => {
                if (isVisible) {
                  setTimeout(() => setAnimateClass('animate__fadeIn'), 0);
                } else {
                  setTimeout(() => setAnimateClass(''), 0);
                }
                return (
                  <div className={`animate__animated ${animateClass}`}>
                    <div id="main">
                      <div id="part1"></div>
                      <div id="part2">
                        <div id="overlay"></div>
                      </div>
                      <div id="part3"></div>
                      <div id="text-div">
                        <h1>Sonali</h1>
                        <h1>Karangutkar</h1>
                        <h1 className="highlight">Full Stack</h1>
                        <h1 className="highlight">Developer</h1>
                      </div>
                      <div id="small-img">
                        <div id="overlay"></div>
                      </div>
                      
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
        </Row>

        {/* Separate section for scrolling text */}
        <Row>
          <Col>
            <div className="content" id="content" style={{ "--quantity": 4 }}> 
              <div id="page1">
                <h1 style={{ "--position": 1 }}>React Frontend Developer</h1>
                <h1 style={{ "--position": 2 }}>Full Stack Developer</h1>
                <h1 style={{ "--position": 3 }}>Web Developer</h1>
                <h1 style={{ "--position": 4 }}>GenAi Enthusiast</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
