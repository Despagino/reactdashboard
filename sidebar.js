import React from 'react'
var faker = require('faker');


const Sidebar = () => {
    return (
        <div className="LeftPanel">
            <hr/>
            <p><i class="newspaper outline icon"></i> Dashboard</p>
            <hr />
            <p><i class="star outline icon"></i> Reviews</p>
            <hr />
            <p><i class="id badge icon"></i> Customers</p>
            <hr />
            <p><i class="chart area icon"></i> Online Analytics</p>
            <hr />
            <p><i class="database icon"></i> Settings</p>

        </div>
    )
}

export default Sidebar