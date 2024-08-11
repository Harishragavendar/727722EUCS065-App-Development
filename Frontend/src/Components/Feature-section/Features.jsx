import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our platform is designed to help children grasp concepts quickly and efficiently, with interactive lessons that cater to various learning styles.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "EduGo! offers around-the-clock support to ensure that both children and parents can get help whenever they need it, making learning a smooth experience.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Upon completing courses, children receive certificates that recognize their achievements and encourage them to continue their learning journey.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
