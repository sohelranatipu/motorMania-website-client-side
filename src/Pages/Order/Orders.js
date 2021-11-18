import { Button } from 'react-bootstrap';
import React from 'react';

const Orders = (props) => {
    const {name,address,phone} = props.order;
    return (
        <>
            <thead>
                    <tr>
                    <th>#</th>
                    <th>Your Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{phone}</td>
                    <td><Button>Delete</Button></td>
                    </tr>
                     
                </tbody>
        </ >
    );
};

export default Orders;