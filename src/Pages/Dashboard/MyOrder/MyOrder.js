import React,{useEffect,useState} from 'react';
import { Table,Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Orders from '../../Order/Orders';

const MyOrder = () => {
    const {user} = useAuth();
    const [orders,setOrders] = useState([]);

    useEffect(()=> {
        const url =`https://stormy-journey-22833.herokuapp.com/placeOrder?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setOrders(data))
    })
    return (
        <div>
            <h3>My All Orders:{orders.length}</h3>
            <Table striped bordered hover>
            <thead>
                    <tr>
                     
                    <th>Your Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Status</th>
                    </tr>
            </thead>
                {
                    orders.map(order => <Orders order={order}></Orders>)
                }
            </Table>
        </div>
    );
};

export default MyOrder;