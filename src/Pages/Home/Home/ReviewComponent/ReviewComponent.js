import React from 'react';
import { Card,Col } from 'react-bootstrap';

const ReviewComponent = (props) => {
    const {name,comment,Rating} = props.review;
    return (
        <div>
            <Col  >
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                     
                    <Card.Text>
                     {comment}
                    </Card.Text>
                    <Card.Text>
                     Rating: {Rating}
                    </Card.Text>
                     
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default ReviewComponent;