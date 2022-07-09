import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css';

export const NavBar = () => {
return (
    <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container fluid>
                <Navbar.Brand href="/" className="title">Piero Sabino</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto links">
                        <Nav.Link href="/skills">Skills</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>  
            </Container>    
            </Navbar>
            </>
)
}