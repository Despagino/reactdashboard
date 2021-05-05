import React from 'react'
var faker = require('faker');


const Rating = (props) => {
    return (
        <div className="AvgRating">
            <h1>Average Rating</h1>
            <p>{props.rating}</p>
        </div>
    )
}

export default Rating