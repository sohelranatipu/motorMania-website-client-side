import { Button } from 'react-bootstrap';
import React from 'react';

const Orders = (props) => {
    const {name,address,phone} = props.order;
    return (
        <>
            
                <tbody>
                    <tr>
                     
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{phone}</td>
                    <td>Pending</td>
                    {/* <td><Button>Delete</Button></td> */}
                    
                    </tr>
                     
                </tbody>
        </ >
    );
};

export default Orders;