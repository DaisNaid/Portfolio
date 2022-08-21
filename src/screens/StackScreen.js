import React from 'react';
import { Container } from 'react-bootstrap';
import MDB from '../images/MDB.png';
import ejs from '../images/ejs.png';
import NJS from '../images/NJS.png';
import RJS from '../images/RJS.png';

export default function StackScreen() {
  return (
    <Container>
      <div className="stack-intro">
        <span>
          As a Fullstack developer, I work with the MERN stack consisting of
          React.js, Node.js, Express.js and MongoDB
        </span>
        <div className="stack">
          <div className="outerCircle">
            <div className="mainCircle">
              <div className="secCircle">
                <img src={MDB} alt="MongoDB" />
              </div>
              <div className="secCircle">
                <img src={ejs} alt="ExpressJS" />
              </div>
              <div className="secCircle">
                <img src={RJS} alt="ReactJS" />
              </div>
              <div className="secCircle">
                <img src={NJS} alt="NodeJS" />
              </div>
              <span>MERN</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
