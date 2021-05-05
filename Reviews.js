import React from 'react'
var faker = require('faker');


const Reviews = (props) => {
    return (
        <div className="Reviews">
            <h1>Reviews</h1>
            <br />
            <p>{props.content}</p>

        </div>
    )
}

export default Reviews