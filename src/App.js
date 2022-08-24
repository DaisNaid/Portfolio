import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
  NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import { Button } from 'react-bootstrap';
import AboutScreen from './screens/AboutScreen.js';
import EducationScreen from './screens/EducationScreen.js';
import CV from './docs/Ayomide Bamigbade CV.pdf';
import PortfolioScreen from './screens/PortfolioScreen.js';
import ContactScreen from './screens/ContactScreen.js';
import StackScreen from './screens/StackScreen.js';
import Wave2 from './images/Wave2.jpg';

function App() {
  const toggle = () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburger_icon = hamburger.querySelector('span');
    const mobile_menu = document.querySelector('.mobile-menu');
    hamburger.addEventListener('click', () => {
      hamburger_icon.innerText =
        hamburger_icon.innerText === 'menu' ? 'close' : 'menu';
      mobile_menu.classList.toggle('is-open');
    });
  };
  return (
    <HashRouter>
      <div>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <div className="name">
            <h2>Ayo</h2>
          </div>
          <div className="menu">
            <ul className="menu-list">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/education">Education</NavLink>
              </li>
              <li>
                <NavLink to="/program-stack">Programming Stack</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <Button className="hamburger" onClick={toggle}>
              <span className="material-icons">menu</span>
            </Button>
            <a href={CV} target="_blank" rel="noreferrer">
              <Button className="cv">View CV</Button>
            </a>
            <ul className="mobile-menu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/education">Education</NavLink>
              </li>
              <li>
                <NavLink to="/program-stack">Programming Stack</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <Container className="site-container">
            <Routes>
              <Route path="/" element={<AboutScreen />} />
              <Route path="education" element={<EducationScreen />} />
              <Route path="portfolio" element={<PortfolioScreen />} />
              <Route path="contact" element={<ContactScreen />} />
              <Route path="program-stack" element={<StackScreen />} />
            </Routes>
          </Container>
        </main>
        <footer className="foot">
          <img
            src={Wave2}
            alt="Footer"
            style={{ width: '100%', height: '50px' }}
          />
          <div className="footer-text">
            <span className="copyright">&copy; Copyright 2022 - Ayo</span>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
