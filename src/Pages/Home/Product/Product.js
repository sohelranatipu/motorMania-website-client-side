import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name,price,description,image} = props.product;
    return (
        <div>
             <Col>
                    <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Link to='/placeOrder'><Button variant="primary">Parchase</Button></Link>
                        
                        </Card.Body>
                    </Card>
                    </Col>
        </div>
    );
};

export default Product;