import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
  NavLink,
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'react-bootstrap';
import AboutScreen from './screens/AboutScreen';

function App() {
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
                <NavLink to="/tech">Technical Skills</NavLink>
              </li>
              <li>
                <NavLink to="/program-lang">Programming Languages</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <Button className="cv">View CV</Button>
          </div>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<AboutScreen />} />
            </Routes>
          </Container>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
