import React, { useState } from 'react';
import './OnlineClasses.css';
import codingImg from './code.jpg';
import artImg from './art.png';
import mathImg from './maths.png';
import scienceImg from './science.jpeg';
import musicImg from './music.jpeg';
import readingImg from './reading.avif';
import Payment from './Payments';

const OnlineClasses = () => {
  const [activePanel, setActivePanel] = useState('online-classes');

  const courses = [
    {
      title: "Introduction to Coding",
      description: "A fun and interactive course to learn basic programming concepts using visual tools.",
      price: "₹1,200",
      image: codingImg
    },
    {
      title: "Creative Art for Kids",
      description: "Explore your creativity with painting, drawing, and other art activities designed for children.",
      price: "₹1,000",
      image: artImg
    },
    {
      title: "Math Fun and Games",
      description: "Engage in playful math activities and games that make learning numbers and problem-solving exciting.",
      price: "₹800",
      image: mathImg
    },
    {
      title: "Science Experiments for Kids",
      description: "Discover the wonders of science with simple, safe, and fun experiments at home.",
      price: "₹1,500",
      image: scienceImg
    },
    {
      title: "Beginner’s Music Class",
      description: "Learn the basics of music theory and practice simple melodies on a beginner's instrument.",
      price: "₹1,300",
      image: musicImg
    },
    {
      title: "Reading Adventures",
      description: "Dive into exciting stories and improve reading skills with engaging activities and discussions.",
      price: "₹900",
      image: readingImg
    }
  ];

  const handleEnroll = async (courseTitle) => {
    const orderId = Date.now(); // Generate a unique order ID
    const enrollmentData = {
      orderId,
      courseName: courseTitle,
      status: 'pending'
    };

    try {
      const response = await fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(enrollmentData)
      });

      if (response.ok) {
        setActivePanel('payment');
      } else {
        alert('Failed to enroll. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="content-panel">
      {activePanel === 'online-classes' ? (
        <>
          <h2 className="heading">Online Classes for Kids</h2>
          <div className="courses-container">
            {courses.map((course, index) => (
              <div className="course-card" key={index}>
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-details">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <p className="course-price">{course.price}</p>
                  <button className="enroll-button" onClick={() => handleEnroll(course.title)}>Enroll Now</button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Payment/>
      )}
    </div>
  );
};

export default OnlineClasses;
