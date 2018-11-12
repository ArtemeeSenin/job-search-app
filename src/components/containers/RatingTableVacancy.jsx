import React from 'react';
import { Link } from 'react-router-dom'

const RatingTableVacancy = ({ data }) => (
    <tr className="rating-table__table-row">
        <td className={`vacancy-summary vacancy-summary--${data.status.toLowerCase().split(' ').join('-')} rating-table__table-data`}>
            <div className="vacancy-summary__position">
                <h2 className="vacancy-summary__position-name"><Link className="vacancy-summary__link" to="/vacancy/1">{data.position}</Link></h2>
                <h3 className="vacancy-summary__position-company"><Link className="vacancy-summary__link" to="/company/1">{data.company}</Link></h3>
            </div>
            <div className="vacancy-summary__conditions">
                <div className="vacancy-summary__conditions-main-info-contrainer">
                    <h4 className="vacancy-summary__salary">
                        <span className="vacancy-summary__salary-number">{data.salaryNumber}</span>
                        <span className="vacancy-summary__salary-currency">{data.salaryCurrency}</span>
                    </h4>
                    <div className="vacancy-summary__conditions-status-container">
                        <span className="vacancy-summary__status">
                            <i className={`vacancy-summary__statuc-icon vacancy-summary__status-icon--${data.status.toLowerCase().split(' ').join('-')} fas fa-circle`}></i>
                            <span className="vacancy-summary__status-text">{data.status}</span>
                        </span>
                    </div>
                    <ul className="vacancy-summary__info-list">
                        <li className="vacancy-summary__info-list-item">
                            <i className="fal fa-clock"></i>
                            <span className="vacancy-summary__info-list-item-text">{data.workingDay} working day</span>
                        </li>
                        <li className="vacancy-summary__info-list-item">
                            <i className="fal fa-bus"></i>
                            <span className="vacancy-summary__info-list-item-text">{data.inTheWay} in the way</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="vacancy-summary__addtional-info">
                <div className="vacancy-summary__requirements">
                    <ul className="vacancy-summary__info-list">
                        {data.additionalStudying ? (
                            <li className="vacancy-summary__info-list-item">
                                <i className="fal fa-graduation-cap"></i>
                                <span className="vacancy-summary__info-list-item-text">Additional studying is required</span>
                            </li>
                        ) : ''
                        }
                        {data.interesting ? (
                            <li className="vacancy-summary__info-list-item">
                                <i className={`fal fa-${data.interesting}`}></i>
                                <span className="vacancy-summary__info-list-item-text">Interesting</span>
                            </li>
                        ) : ''
                        }
                    </ul>
                    {data.comment ? (
                        <div className="vacancy-summary__commentary-container">
                            <div className="comment-toggling comment-toggling--one-line">
                                <p className="comment-toggling__text">{data.comment}</p>
                            </div>
                        </div>
                    ) : ''
                    }
                </div>
            </div>
        </td>
    </tr>
)

export default RatingTableVacancy;