import React from 'react';
import { Container,Row,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bikes from '../../../images/bikes.jpg' ;

const BikeDetails = () => {
    return (
         
            <Container>
                <Row  style={{margin:'100px 0'}}>
                    <Col>
                        <img src={bikes} width='100%' alt="" />
                    </Col>
                    <Col style={{textAlign:'left',marginTop:'40px'}}>
                        <h1>Best Bikes For Tours</h1>
                        <p>Touring on a small motorcycle is slow and uncomfortable, but it has many benefits, from safety to easy maintenance. ... We took the two little bikes into the desert a couple of times too. Later, we rode 9 630 miles on two Chinese 200 cc road bikes (basically an old Suzuki GN 250), from Cape Town to Cairo, over 90 days.
                        </p>
                        <Link to='/products'><Button variant="primary">Our All Bikes</Button></Link>
                        
                    </Col>
                </Row>
            
            </Container>
        
    );
};

export default BikeDetails;