import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="Student Testimonial" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">What Our Patrons Say</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Inspiring and Fun Learning!</h6>
                      <p>
                        "EduGo! has transformed my child's learning experience. The interactive lessons are not only educational but also engaging. My child looks forward to each session with excitement!"
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sarah Smith</h6>
                        <p>New York, USA</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Amazing Educational Journey!</h6>
                      <p>
                        "The courses offered by EduGo! are fantastic. They have helped my son develop a love for learning and given him confidence in his skills. Highly recommend to other parents!"
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Michael Johnson</h6>
                        <p>Los Angeles, USA</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Excellent Support and Content!</h6>
                      <p>
                        "EduGo! provides top-notch educational content with excellent support. My daughter has improved in her studies and enjoys the interactive learning environment."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Emily Davis</h6>
                        <p>Chicago, USA</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
