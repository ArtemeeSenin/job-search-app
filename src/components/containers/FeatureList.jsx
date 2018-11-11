import React from 'react'

const FeatureList = ({ data }) => (
    <ul className="card-info__conditions-list">
        {data.map( ({text, type}, key) => (
            <li key={key} className="card-info__conditions-list-item">
                <i className={`fal fa-${type}`}></i>
                <span className="card-info__conditions-list-item-text">{ text }</span>
            </li>
        ))}
    </ul>
)

export default FeatureList;