import React from 'react'

function createMarkup(markup) { return { __html: markup }; };

const CardContent = ({ data }) => {
    const logo = data.companyLogo ? `<img src="${data.companyLogo}" class="card-info__logo" alt="${data.company}" />` : '';
    const description = data.companyDescription ? data.companyDescription : '';
    return (
        <div className="card-info__content card-info__content--column">
            { data.companyCommentary
                ? <section className="card-info__comment">
                <h3 className="heading heading--large">Personal commentary</h3>
                <div className="card-info__comment-text">
                    {data.companyCommentary}
                </div>
            </section> : null }
            <section className="card-info__description">
                <div className="card-info__description-text" dangerouslySetInnerHTML={createMarkup(logo + description)} />
            </section>
        </div>
    )
}


export default CardContent;