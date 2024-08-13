import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroVideo from "./hero-video.mp4"; // Replace with your video file path
import "./hero-section.css";

const HeroSection = () => {
  // Function to scroll to the #courses section
  const handleScroll = () => {
    const coursesSection = document.querySelector("#courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Discover a world of knowledge at your fingertips. <br />
                Enhance your skills, pursue your passions, and achieve <br />
                your goals with flexible learning options tailored <br />
                to fit your lifestyle.
              </p>
              <button className="btn explore__btn" onClick={handleScroll}>
                Explore Now!
              </button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <video
              src={heroVideo}
              className="w-100 hero__video"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;