import React from 'react'

const CardFooter = () => (
    <footer className="card-info__footer">
        <div className="card-info__footer-buttons-container">
            <a className="button" to="/rating">See rating</a>
            <a className="button" to="/edit-job">Edit</a>
        </div>
    </footer>
)

export default CardFooter;