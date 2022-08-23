import React from 'react';
import Container from 'react-bootstrap/Container';
import Git from '../images/Git-Icon-1788C.png';
import Graduate from '../images/SeekPng.com_convocation-cap-png_2699239.png';
export default function AboutScreen() {
  return (
    <Container className="site-container">
      <div className="intro">
        <div className="about">
          <span>Hi! I'm</span>
          <span>Ayomide Bamigbade</span>
          <span>Preferred Name: Ayo</span>
          <span>Frontend Developer, Fullstack Web Developer</span>
          <span>
            I am a versatile software graduate with commitment to develop
            creative and innovative solutions.
            <p>
              I have gained practical and theoretical skills in both my studies
              and my 3 years of commercial work experience including;
            </p>
            <ul>
              <li>
                Web Development - React.js, Node.js, Express.js, HTML, CSS
              </li>
              <li>Software Development - Java, C#, C++, C</li>
              <li>Cloud Computing - SaaS, AWS, Firebase</li>
              <li>Database Managment - MongoDB, MySQL</li>
              <li>UI/UX Design - Figma, Miro</li>
              <li>Testing and Agile Methods</li>
              <li>Tools - GitHub, Redux, VS Code</li>
            </ul>
          </span>
          <div className="icons">
            <a href="https://github.com/DaisNaid?tab=repositories">
              <img src={Git} alt="GitHub" />
            </a>
          </div>
        </div>
        <div className="float">
          <img src={Graduate} alt="Graduate Logo" />
          <h3 className="title">Graduate Level Titles</h3>
          <span>
            Data <br /> Analyst
          </span>
          <span>
            UI/UX <br /> Designer
          </span>
          <span>
            Project <br /> Manager
          </span>
        </div>
      </div>
    </Container>
  );
}
