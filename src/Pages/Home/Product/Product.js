import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name,price,description,image} = props.product;
    return (
        <div>
             <Col>
                    <Card style={{textAlign:'left'}}>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0,150)}
                        </Card.Text>
                        <h3>Price: {price}</h3>
                        <Link to='/placeOrder'><Button style={{margin:'10px 0'}} variant="primary">Purchase</Button></Link>
                        
                        </Card.Body>
                    </Card>
                    </Col>
        </div>
    );
};

export default Product;