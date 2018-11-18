import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div>
        <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Sorry, no such page</h1>
        <Link to="/" style={{display: 'block', textAlign: 'center', color: '#333', fontSize: '30px'}}>Go to homepage</Link>
    </div>
)

export default NotFound;