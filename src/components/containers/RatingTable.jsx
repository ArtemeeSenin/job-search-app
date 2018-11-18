import React from 'react';
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import RatingTableVacancy from './RatingTableVacancy';

const RatingTable = (props) => {
    const { vacancies, visibilityFilter } = props.data;
    return (
        <div className="rating-table">
            <table className="rating-table__table">
                <tbody>
                    {vacancies
                        .filter((vacancy) => { return visibilityFilter.status.length ? visibilityFilter.status.includes(vacancy.status) : vacancy })
                        .filter((vacancy) => {
                            return visibilityFilter.text
                                ? (
                                    vacancy.position.toLowerCase().includes(visibilityFilter.text.toLowerCase()) ||
                                    vacancy.company.toLowerCase().includes(visibilityFilter.text.toLowerCase())
                                )
                                : vacancy
                        })
                        .map((vacancy, id) => (
                            <RatingTableVacancy key={id} data={vacancy} />
                        ))
                    }
                </tbody>
            </table>
            {vacancies.length === 0 ?
                <>
                    <h2 style={{ textAlign: 'center' }}>Can't seem to find any vacancies yet</h2>
                    <h3 style={{ textAlign: 'center' }}>Go ahead and <Link to="/account/vacancy/add" className="rating-table__add-new-hint">add new vacancy</Link> right now!</h3>
                </>
                :
                null
            }
        </div>
    )
}

export default RatingTable;

