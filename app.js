import React from 'react'
import './styles.css'
import Sidebar from './sidebar'
import Reviews from './Reviews'
import Rating from './Rating'
import Analysis from './Analysis'
import WebsiteVisotrs from './WebsiteVisitors'
import faker from 'faker'


const App = () => {
    return (
        <div className="body">
            <Sidebar />
            <Reviews content="100" />
            <Rating rating="5.0" />
            <Analysis analysis="97 10 50" />
            <WebsiteVisotrs visitors="Visitors per month: 582034" />
        </div>
    )
}

export default App