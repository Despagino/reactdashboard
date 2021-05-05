import React from 'react'
var faker = require('faker');

const Analysis = (props) => {
    return (
        <div className="Analysis">
            <h1>Analysis</h1>
            <p>{props.analysis}</p>
        </div>
    )
}

export default Analysis