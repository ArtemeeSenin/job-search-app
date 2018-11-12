import React from 'react'
import { Link } from 'react-router-dom'

const CardFooter = ({ links }) => (
    <footer className="card-info__footer">
        <div className="card-info__footer-buttons-container">
            {links.map( (link, key) => (
                <Link className="button" to={ link.path } key={key}>{ link.text }</Link>
            ))}
        </div>
    </footer>
)

export default CardFooter;