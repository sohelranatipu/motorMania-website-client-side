import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Products from '../Products/Products';
import {Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Banner></Banner>
            <Products></Products>
            <Link to="/products"><Button className="mt-5" variant="primary" size="lg">All Products</Button></Link>
            
        </div>
    );
};

export default Home;