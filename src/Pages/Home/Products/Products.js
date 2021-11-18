import React, { useEffect,useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <h1 className="my-5">Our Products</h1>
            <Row xs={1} md={3} className="g-4">
                 {
                     products.map(product => <Product
                         key={product.id} 
                         product={product}
                         ></Product>)
                 }
            </Row>
        </div>
    );
};

export default Products;