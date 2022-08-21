import React from 'react';
import Container from 'react-bootstrap/Container';
import Dashboard from '../images/Screenshot117.png';
import DefaultAttendance from '../images/Screenshot116.png';
import Attendance from '../images/Screenshot120.png';

export default function PortfolioScreen() {
  return (
    <Container>
      <div className="experience">
        <div className="achievement">
          <div className="circle">
            <div className="number">3+</div>
          </div>
          <span>years experience</span>
        </div>
      </div>
      <div className="portfolio">
        <span>Recent Projects</span>
      </div>
    </Container>
  );
}
