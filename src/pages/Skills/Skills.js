import { CardItem } from "../../components/CardItem/CardItem"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const Skills = () => {

return (
        <>
            <Container fluid  style={{textAlign:'center',marginTop:'2%',marginLeft:'5%',padding:20, overflowY: 'scroll' }}>
                <Row md={3} style={{marginTop:5}}>
                    <Col>
                        <CardItem title="HTML" description="Hypertext Markup Language" link="https://www.w3.org/TR/html/" />
                    </Col>
                    <Col >
                        <CardItem title="CSS" description="Cascading Style Sheets" link="https://www.w3.org/Style/CSS/" />
                    </Col>
                    <Col>
                        <CardItem title="JavaScript" description="JavaScript is a high-level, interpreted programming language that makes it easier to use than other programming languages." link="https://www.javascript.com/" />
                    </Col>
                </Row>
                <Row md={3} style={{marginTop:5}}>
                    <Col>
                        <CardItem title="React.js" description="A JavaScript library for building user interfaces." link="https://reactjs.org/" />
                    </Col>
                    <Col>
                        <CardItem title="Node.js" description="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine." link="https://nodejs.org/" />
                    </Col>
                    <Col>
                        <CardItem title="Express.js" description="Fast, unoptimized, minimalist web framework for Node.js." link="https://expressjs.com/" />
                    </Col>
                </Row>
                <Row md={3} style={{marginTop:5}}>
                    <Col>
                        <CardItem title="Bootstrap" description="Bootstrap is a free and open-source toolkit for developing with HTML, CSS, and JS." link="https://getbootstrap.com/" />
                    </Col>
                    <Col>
                        <CardItem title="MySQL" description="MySQL is a relational database management system (RDBMS) that is used to store and manage data." link="https://www.mysql.com/" />
                    </Col>
                    <Col>
                        <CardItem title="MongoDB" description="MongoDB is a document-oriented database program that uses JSON-like documents to store data." link="https://www.mongodb.com/" />
                    </Col>
                </Row>
                <Row md={3} style={{marginTop:5}}>
                    <Col>
                        <CardItem title="PHP" description="PHP is a server-side scripting language designed for web development." link="https://www.php.net/" />
                    </Col>
                    <Col>
                        <CardItem title="Git" description="Git is a free and open-source distributed version control system." link="https://git-scm.com/" />
                    </Col>
                    <Col>
                        <CardItem title="GitHub" description="GitHub is a web-based Git repository hosting service." link="https://github.com/" />
                    </Col>
                </Row>
            </Container>


            
        </>
    )
}