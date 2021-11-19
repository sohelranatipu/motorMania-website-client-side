import React, { useRef } from 'react';
import { Form,Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const PlaceOrder = () => {
    const {user} = useAuth();
    
    const nameRef = useRef();
    const addressRef = useRef();
    const phoneRef = useRef();
    const email = user.email ;
    

    const handleOrderSubmit = e =>{
        const name = nameRef.current.value ;
        const address = addressRef.current.value ;
        const phone = phoneRef.current.value ;
        

        const newOrder = {name,address,phone,email};
        console.log(newOrder);

        fetch('https://stormy-journey-22833.herokuapp.com/placeOrder',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newOrder)

        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Order Successful');
                e.target.reset();
            }
        })
        e.preventDefault();
    }


    return (
        <div>
            <h1>This Is Place Order Place</h1>

            <Form onSubmit={handleOrderSubmit} style={{width:'50%',margin:'0 auto'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" ref={nameRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" ref={addressRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone" ref={phoneRef}/>
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Order Now
                </Button>
            </Form>

        </div>
    );
};

export default PlaceOrder;