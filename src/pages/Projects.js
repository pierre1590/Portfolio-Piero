import {Progress} from "../components/Progress/Progress";
import React, {useState} from "react";
import { Data } from "../data";
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import NotAvailable from "../assets/images/ImageNotAvailable.jpg";


export const Projects = () => {
    const [items,setItems] = useState(Data);

    return (
        <>
            {items &&  (
                <Container fluid style={{textAlign:'center',marginTop:'2%',marginLeft:'3%',padding:20, overflowY: 'scroll',alignSelf:'center' }}>
                    <Row md={3} style={{marginTop:10}}>
                        {items.map((item) => (
                            <Col>
                                <Card style={{width: "30em",height: "32em",borderRadius:20,margin:5}}>
                                {item.image ?  (
                                    <Card.Img variant="top" src={item.image} style={{borderRadius:20,marginTop:5,height: 220,width:300,alignSelf:'center'}}/>
                                ) : (<Card.Img variant="top" src={NotAvailable} style={{borderRadius:20,marginTop:5,height: 200,width:200,alignSelf:'center'}}/>
                                )}
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                        <Button variant="primary" href={item.link} target="_blank" >Go to the app</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            )}
        </>
    )
}