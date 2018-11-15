import React from 'react'
import cx from 'classnames'
import FeatureList from './FeatureList';

const CardContent = ({data, features}) => {
    return (
        <div className={cx(
            'card-info__content',
            { 'card-info__content--column': !features }
        )}>
            <section className="card-info__comment">
                <h3 className="heading heading--large">Personal commentary</h3>
                <div className="card-info__comment-text">
                    { data.commentary }
                </div>
            </section>
            { features
                ? <section className="card-info__conditions">
                    <h3 className="heading heading--large card-info__conditions-heading">Conditions</h3>
                    <FeatureList data={ features }/>
                </section>
                : null }
            <section className="card-info__description">
                <h3 className="heading heading--large">Job description</h3>
                <div className="card-info__description-text">
                    { data.description }
                </div>
            </section>
        </div>
    )
}

export default CardContent;