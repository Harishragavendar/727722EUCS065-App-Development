import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Fun with Coding: Build Your First Website from scratch ",
    lesson: 10,
    students: 20,
    rating: 4.8,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Creative Art & Design: Draw and Paint with Digital Tools",
    lesson: 8,
    students: 18,
    rating: 4.7,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Introduction to Game Design: Create Your Own Adventure",
    lesson: 15,
    students: 25,
    rating: 4.9,
    imgUrl: courseImg3,
  },
];


const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Welcome to our exciting world of learning! These courses are 
                  designed to spark curiosity and creativity in young minds. 
                  From designing fun websites to creating colorful graphics, 
                  each course is a journey full of discovery and hands-on activities. 
                  Let’s embark on a learning adventure together!
                </p>
              </div>

              <div className="w-50 text-end">
                {/* <button className="btn">See All</button> */}
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6" key={item.id}>
              <CourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
