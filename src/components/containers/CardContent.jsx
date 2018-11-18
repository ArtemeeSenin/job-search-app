import React, { Component } from 'react'
import cx from 'classnames'
import FeatureList from './FeatureList';

function createMarkup(markup) { return { __html: markup }; };

class CardContent extends Component {
    constructor(){
        super();
        this.state ={
            descriptionToggled: false,
            commentToggled: false
        }
    }
    render(){
        const {data, features} = this.props
        return (
            <div className={cx(
                'card-info__content',
                { 'card-info__content--column': !features }
            )}>
                <section
                    className={cx(
                        'card-info__comment',
                        {'card-info__comment--is-active': this.state.commentToggled}
                    )}
                    onClick={() => this.setState({commentToggled: !this.state.commentToggled})}
                >
                    <h3 className="heading heading--large">Personal commentary</h3>
                    <div className="card-info__comment-text" dangerouslySetInnerHTML={createMarkup(data.commentary)}/>
                </section>
                { features
                    ? <section className="card-info__conditions">
                        <h3 className="heading heading--large card-info__conditions-heading">Conditions</h3>
                        <FeatureList data={ features }/>
                    </section>
                    : null }
                <section
                    className={cx(
                        'card-info__description',
                        {'card-info__description--is-active': this.state.descriptionToggled}
                    )}
                    onClick={() => this.setState({descriptionToggled: !this.state.descriptionToggled})}
                    >
                    <h3 className="heading heading--large">Job description</h3>
                    <div className="card-info__description-text" dangerouslySetInnerHTML={createMarkup(data.description)} />
                </section>
            </div>
        )
    }
}

export default CardContent;