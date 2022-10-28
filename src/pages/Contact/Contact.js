import {useRef, useState} from 'react';
import {Col,Row,Container,FloatingLabel,Form,Button,Modal,Alert} from 'react-bootstrap';
import {MDBIcon} from 'mdb-react-ui-kit';
import emailjs from '@emailjs/browser';
import './style.css';
import env from 'react-dotenv';





export const Contact = () => {
  const [sendName, setSendName] = useState('');
  const [sendEmail, setSendEmail] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [send,setSend] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const handleName = (e) => {
    setSendName(e.target.value);
  };

  const handleEmail = (e) => {
    setSendEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_qneygn8',
      'template_phm0ett',
      form.current,
     `${env.REACT_APP_PUBLIC_KEY}`
    )
      try{
        setSend(true);
        handleShow();
        validateForm();
      }catch(error){
        console.log(error);
      
      }
      setSendName('');
      setSendEmail('');
      setMessage('');
  };

  const validateForm = () => {
    if (sendName === '' || sendEmail === '' || message === '') {
      return false;
    } else {
      return true;
    }
  };

 

  return (
    <>
    
      <Container className="contact-container">
        <h1 className="contact-title">Get in touch</h1>
        <Row>
          <Col md={6} className="contact-col">
            <Form ref={form}   onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  value={sendName}
                  placeholder="Name"
                  name="name"
                  onChange={handleName}
                />
                
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={sendEmail}
                  placeholder="Email"
                  onChange={handleEmail}
                />
                
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  required
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  style={{ height: "100px" }}
                  value={message}
                  onChange={handleMessage}
                />
              </FloatingLabel>
              <Button variant="primary" type="submit" className="contact-btn" >
                Send mail
                <MDBIcon icon="paper-plane" className="ms-2" />
              </Button>
            </Form>
          </Col>
          {send ? (
              <Modal
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Message sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Alert variant="success">
                  Message sent successfully
                  <MDBIcon icon="check-circle" className="ms-2" />
                  </Alert>
                </Modal.Body>
              </Modal>
            ) : (
              <Modal
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Message not sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Alert variant="danger">
                    Message not sent, try again.
                    <MDBIcon icon="times-circle" className="ms-2" />
                  </Alert>
                </Modal.Body>
              </Modal>
            )}
          <Col md={6} className="contact-col">
            <p className="contact-text">
              If you want to chat, send me a message on Whatsapp or Telegram.
            </p>
            <div className="button-container">
              <a
                href="https://wa.me/+393395997631"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Button variant="success">+39 339 599 7631</Button>
              </a>
              <a
                href="https://t.me/Pierre90"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Button variant="primary">@Pierre90</Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};