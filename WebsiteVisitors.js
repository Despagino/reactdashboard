import React from 'react'
var faker = require('faker');

const WebsiteVisitors = (props) => {
    return (
        <div className="WebsiteVisitors">
            <h1>Website Visitors</h1>
            <p>{props.visitors}</p>
        </div>
    )
}

export default WebsiteVisitors