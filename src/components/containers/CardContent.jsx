import React from 'react'
import cx from 'classnames'
import FeatureList from './FeatureList';

const CardContent = ({features}) => (
    <div className={cx(
        'card-info__content',
        {'card-info__content--column': !features}
    )}>
        <section className="card-info__comment">
            <h3 className="heading heading--large">Personal commentary</h3>
            <div className="card-info__comment-text">
                <p>That’s why we developed Toon, the smart thermostat that puts people in charge of their homes.
                    Over 150 professionals at our Amsterdam office are working to create solutions for homes and offices across Europe.
                            Making lives smarter, easier and more comfortable.</p>
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
                <p>As a Frontend developer at Quby you will work primarily on our hybrid mobile application which is targeted at our
                    energy utility’s end users. The app allows over 350.000 people to remotely access their Toon thermostat, giving
                    them
                    control of their home as well as insights into their energy usage and waste. It also provides valuable marketing
                            channels for our tenants. Does this sound like a challenge to you? Read on!</p>
                <p><b>Your challenge</b></p>
                <ul>
                    <li>Work together in a cross-functional team to create smart home apps for more than 350.000 people.</li>
                    <li>Create functional, appealing, intuitive, responsive, cross-browser web applications based on UX/UI designs.</li>
                    <li>Write concise, unit tested, highly performant code.</li>
                    <li>Make innovative and correct architectural decisions.</li>
                    <li>Have an eye for detail but keep the big picture in mind.</li>
                    <li>Be cognizant of user privacy and security.</li>
                    <li>Your challenge</li>
                </ul>
                <p>This job will be full of fun!</p>
            </div>
        </section>
    </div>
)

export default CardContent;