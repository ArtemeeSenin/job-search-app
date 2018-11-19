import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import cx from 'classnames'

class RatingTableVacancy extends Component{
    constructor(props) {
        super(props)
        this.state = {
            commentaryIsActive: false,
            toogleComment: true
        }
    }

    stripTags(code){
        const div = document.createElement("div");
        div.innerHTML = code;
        return div.innerText;
    }

    render(){
        const { data } = this.props;
        return (
            <tr className="rating-table__table-row">
                <td className={`vacancy-summary vacancy-summary--${data.status.toLowerCase().split(' ').join('-')} rating-table__table-data`}>
                    <div className="vacancy-summary__position">
                        <h2 className="vacancy-summary__position-name"><Link className="vacancy-summary__link" to={`/account/vacancy/${data.id}`}>{data.position}</Link></h2>
                        <h3 className="vacancy-summary__position-company"><Link className="vacancy-summary__link" to={`/account/company/${data.id}`}>{data.company}</Link></h3>
                    </div>
                    <div className="vacancy-summary__conditions">
                        <div className="vacancy-summary__conditions-main-info-contrainer">
                            <h4 className="vacancy-summary__salary">
                                <span className="vacancy-summary__salary-number">{data.salary.toLocaleString('ru')}</span>
                                <span className="vacancy-summary__salary-currency">&#8381;</span>
                            </h4>
                            <div className="vacancy-summary__conditions-status-container">
                                <div className="vacancy-summary__status">
                                    <i className={`vacancy-summary__status-icon vacancy-summary__status-icon--${data.status.toLowerCase().split(' ').join('-')} fas fa-circle`}></i>
                                    <span className="vacancy-summary__status-text">{data.status}</span>
                                </div>
                            </div>
                            <ul className="vacancy-summary__info-list">
                                <li className="vacancy-summary__info-list-item">
                                    <i className="fal fa-clock"></i>
                                    <span className="vacancy-summary__info-list-item-text">{Math.ceil(data.workDay / 60)} h. work day</span>
                                </li>
                                <li className="vacancy-summary__info-list-item">
                                    <i className="fal fa-bus"></i>
                                    <span className="vacancy-summary__info-list-item-text">{data.inTheWay} min. in the way</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="vacancy-summary__addtional-info">
                        <div className="vacancy-summary__requirements">
                            <ul className="vacancy-summary__info-list">
                                {data.requiresAdditionalStudying ? (
                                    <li className="vacancy-summary__info-list-item">
                                        <i className="fal fa-graduation-cap"></i>
                                        <span className="vacancy-summary__info-list-item-text">Additional studying is required</span>
                                    </li>
                                ) : ''
                                }
                                <li className="vacancy-summary__info-list-item">
                                    <i className={`fal fa-${data.isInteresting ? 'smile' : 'frown'}`}></i>
                                    <span className="vacancy-summary__info-list-item-text">{data.isInteresting ? 'Interesting' : 'Not interesting'}</span>
                                </li>
                            </ul>
                            {data.commentary ? (
                                <div className="vacancy-summary__commentary-container" onClick={ () => { this.setState({commentaryIsActive: !this.state.commentaryIsActive})}}>
                                    <div className={cx(
                                        'comment-toggling',
                                        'comment-toggling--one-line',
                                        {'comment-toggling--is-active': this.state.commentaryIsActive}
                                    )}>
                                        <p className="comment-toggling__text">{this.stripTags(data.commentary)}</p>
                                    </div>
                                </div>
                            ) : null
                            }
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}

export default RatingTableVacancy;