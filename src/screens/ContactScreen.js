import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const bell = <FontAwesomeIcon icon={faBell} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;

export default function ContactScreen() {
  const form = useRef();
  const navigate = useNavigate();

  const [received, setReceived] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_iwtdr7d',
        'template_6myq8np',
        form.current,
        '-iqriKpmDqVBYooaR'
      )
      .then(
        (result) => {
          console.log(result.text);
          setReceived(true);
          setTimeout(() => {
            navigate('/');
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="site-container">
      <div className="contact-icons">
        <a href="tel: +447903741926">{phone} Call Me</a>
        <a href="mailto: iamtryve@gmail.com">{envelope} Email Me</a>
      </div>
      <div className="contact">
        <span>
          Get In Touch{' '}
          <span className="bell" style={{ color: 'red' }}>
            {bell}
          </span>
        </span>
      </div>
      <div className="contact-form">
        <Form className="rounded p-4 p-sm3" ref={form} onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Control
              name="name"
              className="mb-3"
              type="text"
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control
              name="email"
              className="mb-3"
              type="text"
              placeholder="Enter Email"
              required
            />
          </Form.Group>
          <textarea name="message" className="mb-3" placeholder="Message" />
          <div>
            <Button className="contact-button" variant="light" type="submit">
              Send
            </Button>
          </div>
          <span style={{ color: 'red' }}>
            {received && 'Thank you for getting in touch!'}
          </span>
        </Form>
      </div>
    </Container>
  );
}
