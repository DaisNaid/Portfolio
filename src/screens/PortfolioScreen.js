import React from 'react';
import Container from 'react-bootstrap/Container';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import SpotifyHome from '../images/Figma/SpotifyHome.jpeg';
import SpotifyOne from '../images/Figma/SpotifyOne.jpeg';
import Home1 from '../images/NI/Home1.png';
import Home2 from '../images/NI/Home2.png';
import Home3 from '../images/NI/Home3.png';
import Home4 from '../images/NI/Home4.png';
import EmptyCart from '../images/NI/EmptyCart.png';
import NI_Dashboard from '../images/NI/NI_Dashboard.png';
import Order from '../images/NI/Order.png';
import Payment from '../images/NI/Payment.png';
import PlaceOrder from '../images/NI/PlaceOrder.png';
import Shipping from '../images/NI/Shipping.png';
import SignIn from '../images/NI/SignIn.png';
import Attendance from '../images/OAS/Attendance.png';
import CheckIn from '../images/OAS/CheckIn.png';
import Classes from '../images/OAS/Classes.png';
import Courses from '../images/OAS/Courses.png';
import DisabledCheckIn from '../images/OAS/DisabledCheckIn.png';
import LogIn from '../images/OAS/LogIn.png';
import MyClasses from '../images/OAS/MyClasses.png';
import MyCourses from '../images/OAS/MyCourses.png';
import OAS_Dashboard from '../images/OAS/OAS_Dashboard.png';
import CP from '../images/Port/CP.png';
import EP from '../images/Port/EP.png';
import HP from '../images/Port/HP.png';
import PP from '../images/Port/PP.png';
import SP from '../images/Port/SP.png';
import DH from '../images/Rapid/DH.png';
import Home from '../images/Rapid/Home.png';
import MainProfile from '../images/Rapid/MainProfile.png';
import MP2 from '../images/Rapid/MP2.png';
import Profile from '../images/Rapid/Profile.png';
import Splash from '../images/Rapid/Splash.png';
import Splash2 from '../images/Rapid/Splash2.png';
import Splash3 from '../images/Rapid/Splash3.png';

export default function PortfolioScreen() {
  const NI_images = [
    {
      original: NI_Dashboard,
      originalHeight: '400px',
    },
    {
      original: SignIn,
      originalHeight: '400px',
    },
    {
      original: EmptyCart,
      originalHeight: '400px',
    },
    {
      original: Order,
      originalHeight: '400px',
    },
    {
      original: Home1,
      originalHeight: '400px',
    },
    {
      original: Home2,
      originalHeight: '400px',
    },
    {
      original: Home3,
      originalHeight: '400px',
    },
    {
      original: Home4,
      originalHeight: '400px',
    },
    {
      original: Payment,
      originalHeight: '400px',
    },
    {
      original: PlaceOrder,
      originalHeight: '400px',
    },
    {
      original: Shipping,
      originalHeight: '400px',
    },
  ];

  const OAS_Images = [
    {
      original: OAS_Dashboard,
      originalHeight: '400px',
    },
    {
      original: Classes,
      originalHeight: '400px',
    },
    {
      original: DisabledCheckIn,
      originalHeight: '400px',
    },
    {
      original: CheckIn,
      originalHeight: '400px',
    },
    {
      original: MyCourses,
      originalHeight: '400px',
    },
    {
      original: LogIn,
      originalHeight: '400px',
    },
    {
      original: Attendance,
      originalHeight: '400px',
    },
    {
      original: Courses,
      originalHeight: '400px',
    },
    {
      original: MyClasses,
      originalHeight: '400px',
    },
  ];

  const Port_Images = [
    {
      original: PP,
      originalHeight: '600px',
    },
    {
      original: CP,
      originalHeight: '600px',
    },
    {
      original: HP,
      originalHeight: '600px',
    },
    {
      original: EP,
      originalHeight: '600px',
    },
    {
      original: SP,
      originalHeight: '600px',
    },
  ];

  const Rapid_Images = [
    {
      original: Splash,
      originalHeight: '600px',
    },
    {
      original: Splash2,
      originalHeight: '600px',
    },
    {
      original: Splash3,
      originalHeight: '600px',
    },
    {
      original: DH,
      originalHeight: '600px',
    },
    {
      original: Home,
      originalHeight: '600px',
    },
    {
      original: MainProfile,
      originalHeight: '600px',
    },
    {
      original: MP2,
      originalHeight: '600px',
    },
    {
      original: Profile,
      originalHeight: '600px',
    },
  ];

  return (
    <Container className="site-container">
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
        <div className="Rapid">
          <div className="Rapid-text">
            <span>UI/UX Design</span>
            <span>
              A proposed UI design of a delivery system called RapidMove based
              on results from a UX research
            </span>
          </div>
          <ImageGallery
            items={Rapid_Images}
            showFullscreenButton={false}
            autoPlay={true}
          />
        </div>
        <div className="figma">
          <div className="figma-text">
            <span>UI Design</span>
            <span>A redesign of Spotify's UI using Figma</span>
          </div>
          <img src={SpotifyHome} alt="Spotify" />
          <img src={SpotifyOne} alt="Spotify" />
        </div>
        <div className="NI">
          <div className="NI-text">
            <span>E-Commerce</span>
            <span>
              A fully functional e-commerce website with admin dashboard,
              payment systems, order history and more! using React, Express.js,
              Node.js, and MongoDB
            </span>
            <span>
              Disclaimer: Some words and pictures only serve as fillers
            </span>
          </div>
          <ImageGallery
            items={NI_images}
            showFullscreenButton={false}
            autoPlay={true}
          />
        </div>
        <div className="OAS">
          <div className="OAS-text">
            <span>Online Attendance System</span>
            <span>
              A fully functional online attendance system for schools with admin
              dashboard, attendance records, user management and more! using
              React, Express.js, Node.js, and MongoDB
            </span>
            <span>
              Project Description: &nbsp;
              <a href="https://github.com/DaisNaid/Online-Attendance-System-with-Manual-Class-Control">
                Here
              </a>
            </span>
          </div>
          <ImageGallery
            items={OAS_Images}
            showFullscreenButton={false}
            autoPlay={true}
          />
        </div>
        <div className="Port">
          <div className="Port-text">
            <span>Portfolio Website</span>
            <span>
              An attractive yet simple looking website to show off my skills as
              a web developer with online CV viewing using React and CSS
            </span>
          </div>
          <ImageGallery items={Port_Images} autoPlay={true} />
        </div>
        <span>All Projects completed and owned by Yours Truly</span>
      </div>
    </Container>
  );
}
