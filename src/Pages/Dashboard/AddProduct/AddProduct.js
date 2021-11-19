import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://stormy-journey-22833.herokuapp.com/addProduct',data)
      .then(res=> {
          if(res.data.insertedId){
              alert('Added SuccessFully');
              reset();
          }
      })
    }
    return (
        <div className="myform">
            <h1>This is Add Product Page</h1>
             
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Bikes Name'/>
                <textarea {...register("description"  )} placeholder='Description'/>
                <input type="number" {...register("price")} placeholder='Price'/>
                <input {...register("image"  )} placeholder='image URL'/>
                <input type="submit" />
            </form>

 
        </div>
    );
};

export default AddProduct;