import React,{useState,useEffect} from 'react';
import { Row } from 'react-bootstrap';
import ReviewComponent from '../Home/ReviewComponent/ReviewComponent';

const ReviewsComponent = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://stormy-journey-22833.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className='my-5'>Here is Our Recent Reviews</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    reviews.map(review => <ReviewComponent review={review}></ReviewComponent>)
                }
            </Row>
        </div>
    );
};

export default ReviewsComponent;