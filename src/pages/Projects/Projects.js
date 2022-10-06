import {Progress} from "../../components/Progress/Progress";
import React, {useState} from "react";
import { Data } from "../../data";
import {Container,Row,Col,Card,Button} from "react-bootstrap";
import NotAvailable from "../../assets/images/ImageNotAvailable.jpg";
import './style.css';


export const Projects = () => {
    const [items,setItems] = useState(Data);

    return (
        <>
            {items &&  (
                <Container fluid  className="container">
                    <Row md={3} style={{marginTop:10}}>
                        {items.map((item) => (
                            <Col>
                                <Card  className="card" style={{borderRadius:20}}>
                                {item.image ?  (
                                    <Card.Img variant="top" src={item.image} style={{borderRadius:20,marginTop:5,height: 220,width:300,alignSelf:'center'}}/>
                                ) : (<Card.Img variant="top" src={NotAvailable} style={{borderRadius:20,marginTop:5,height: 200,width:200,alignSelf:'center'}}/>
                                )}
                                    <Card.Body>
                                        <Card.Title style={{textAlign:'center'}}>{item.title}</Card.Title>
                                        <Card.Text style={{textAlign:'justify'}}>
                                            {item.description}
                                        </Card.Text>
                                        <div style={{display:'flex', flexDirection:'row',alignItems: 'center',alignSelf:'center'}}>
                                            <Button variant="primary" href={item.link} target="_blank" >Go to the app</Button>
                                            <Button variant="primary" href={item.github} target="_blank" style={{marginLeft:10}}>View code</Button>
                                        </div>
                                        
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