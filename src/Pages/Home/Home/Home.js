import React,{useState,useEffect} from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Products from '../Products/Products';
import {Button,Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewsComponent from '../ReviewsComponent/ReviewsComponent';
import BikeDetails from '../BikeDetails/BikeDetails';

const Home = () => {
    const [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('https://stormy-journey-22833.herokuapp.com/addProduct')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <h1 className="my-5">Our Products</h1>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0,6).map(product => <Product
                            key={product.id} 
                            product={product}
                            ></Product>)
                    }
                </Row>
                <Link to="/products"><Button className="mt-5" variant="primary" size="lg">All Products</Button></Link>
                
                <BikeDetails></BikeDetails>
                <ReviewsComponent></ReviewsComponent>
            </Container>
            
        </div>
    );
};

export default Home;