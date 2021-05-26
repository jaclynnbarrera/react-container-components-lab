// Code MovieReviews Here
import React from 'react'

function MovieReviews({reviews}){
    return (
        <div className="review-list">
            {reviews.map(review => <li className="review"> {review.headline}</li>)}
        </div>
    )
}

export default MovieReviews

