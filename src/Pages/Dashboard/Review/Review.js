import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css'

const Review = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
      console.log(data);
      axios.post('https://stormy-journey-22833.herokuapp.com/review',data)
      .then(res=> {
          if(res.data.insertedId){
              alert('Added Your Review');
              reset();
          }
      })
    }
    return (
        <div className="myform">
            <h1> Add Your Review</h1>
             
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name" )} placeholder='Your Name'/>
                {/* <input type="email" {...register("email")} placeholder='Your Email'/> */}
                <textarea {...register("comment"  )} placeholder='Your Review'/>
                <input   {...register("Rating")} placeholder='Rating 1-5'/>
                
                 
                <input type="submit" />
            </form>

 
        </div>
    );
};

export default Review;