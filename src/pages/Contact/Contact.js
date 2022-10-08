import {Col,Row,Container,FloatingLabel,Form,Button} from 'react-bootstrap';
import {MDBIcon} from 'mdb-react-ui-kit';
import './style.css';
import {FaWhatsapp} from 'react-icons/fa';


export const Contact = () => {
  

  return (
    <>
      <Container className="contact-container">
        <h1 className="contact-title">Get in touch</h1>
        <Row>
          <Col md={6} className="contact-col">
            <Form noValidate>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control required type="text" placeholder="Name" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Message"
                  style={{ height: "100px" }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid message.
                </Form.Control.Feedback>
              </FloatingLabel>
              <Button variant="primary" type="submit" className="contact-btn">
                Submit
                <MDBIcon icon="paper-plane" className="ms-2" />
              </Button>
            </Form>
          </Col>
          <Col md={6} className="contact-col">
            <p className="contact-text">
              If you want to chat, send me a message on Whatsapp
            </p>
            
           
          </Col>
        </Row>
      </Container>
    </>
  );
};