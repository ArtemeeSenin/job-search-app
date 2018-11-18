import React, { Component } from 'react'
import cx from 'classnames'

function createMarkup(markup) { return { __html: markup }; };

class CardContent extends Component {
    constructor(){
        super();
        this.state ={
            descriptionToggled: false,
            commentToggled: false
        }
    }
    render() {
        const { data } = this.props
        const logo = data.companyLogo ? `<img src="${data.companyLogo}" class="card-info__logo" alt="${data.company}" />` : '';
        const description = data.companyDescription ? data.companyDescription : '';
        return (
            <div className="card-info__content card-info__content--column">
                { data.companyCommentary
                    ? <section
                        className={cx(
                            'card-info__comment',
                            {'card-info__comment--is-active': this.state.commentToggled}
                        )}
                        onClick={() => this.setState({commentToggled: !this.state.commentToggled})}
                    >
                    <h3 className="heading heading--large">Personal commentary</h3>
                    <div className="card-info__comment-text">
                        {data.companyCommentary}
                    </div>
                </section> : null }
                <section
                    className={cx(
                        'card-info__description',
                        {'card-info__description--is-active': this.state.descriptionToggled}
                    )}
                    onClick={() => this.setState({descriptionToggled: !this.state.descriptionToggled})}
                >
                    <div className="card-info__description-text" dangerouslySetInnerHTML={createMarkup(logo + description)} />
                </section>
            </div>
        )
    }
}


export default CardContent;