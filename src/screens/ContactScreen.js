import React from 'react';
import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { useRef } from 'react';

/*const Contact = () => {
  const form = useRef();
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
};*/

const bell = <FontAwesomeIcon icon={faBell} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;

export default function ContactScreen() {
  return (
    <Container>
      <div className="contact-icons">
        <a href="tel: +447903741926">{phone} Call Me</a>
        <a href="mailto: iamtryve@gmail.com">{envelope} Email Me</a>
      </div>
      <div className="contact">
        <span>Get In Touch</span>
        {bell}
      </div>
      <div className="contact-form">
        <Form className="rounded p-4 p-sm3">
          <Form.Group>
            <Form.Control
              className="mb-3"
              type="text"
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
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
        </Form>
      </div>
    </Container>
  );
}
