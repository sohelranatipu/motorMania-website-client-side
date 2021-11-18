import React,{useEffect,useState} from 'react';
import { Table,Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Orders from '../../Order/Orders';

const MyOrder = () => {
    const {user} = useAuth();
    const [orders,setOrders] = useState([]);

    useEffect(()=> {
        const url =`http://localhost:5000/placeOrder?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setOrders(data))
    })
    return (
        <div>
            <h3>My All Orders:{orders.length}</h3>
            <Table striped bordered hover>
                {
                    orders.map(order => <Orders order={order}></Orders>)
                }
            </Table>
        </div>
    );
};

export default MyOrder;