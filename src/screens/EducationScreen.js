import React from 'react';
import Container from 'react-bootstrap/Container';
import Graduate from '../images/SeekPng.com_convocation-cap-png_2699239.png';
import Confetti from 'react-confetti';

export default function EducationScreen() {
  return (
    <Container className="site-container">
      <Confetti opacity={0.55} />
      <div className="education">
        <div className="middlesex">
          <span>Middlesex University, London</span>
          <span>
            BSc Information Technology and Business Information Systems
          </span>
          <div className="mid1">
            <img src={Graduate} alt="Graduate Logo" />
            <h3 className="grade">1st Class</h3>
            <h3 className="year">2022</h3>
          </div>
        </div>
        <div className="aptech">
          <span>Aptech, Nigeria</span>
          <span>Advanced Diploma in Software Engineering</span>
          <div className="apt1">
            <img src={Graduate} alt="Graduate Logo" />
            <h3 className="grade">Distinction</h3>
            <h3 className="year">2021</h3>
          </div>
        </div>
      </div>
    </Container>
  );
}
