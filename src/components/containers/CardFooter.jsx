import React from 'react'

const CardFooter = ({ links }) => (
    <footer className="card-info__footer">
        <div className="card-info__footer-buttons-container">
            {links.map( (link, key) => (
                <a className="button" to={ link.path } key={key}>{ link.text }</a>
            ))}
        </div>
    </footer>
)

export default CardFooter;