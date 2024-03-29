import React from "react";
import  Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export  const CardItem = ({title, description, link}) => {
    return (
        <>
            <Card style={{ width: '23rem', borderRadius:20,margin:5 }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary" href={link}>Learn More</Button>
                </Card.Body>
            </Card>
        </>
    )
}