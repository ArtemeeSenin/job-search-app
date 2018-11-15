import React from 'react';
// import { connect } from 'react-redux'
import RatingTableVacancy from './RatingTableVacancy';

const RatingTable = (props) => {
    const { vacancies, visibilityFilter } = props.data;

    return (
        <div className="rating-table">
            <table className="rating-table__table">
                <tbody>
                    { vacancies
                        .filter( (vacancy) => { return visibilityFilter.status.length ? visibilityFilter.status.includes(vacancy.status) : vacancy })
                        .filter( (vacancy) => { return visibilityFilter.text
                            ? (
                                vacancy.position.toLowerCase().includes(visibilityFilter.text.toLowerCase()) ||
                                vacancy.company.toLowerCase().includes(visibilityFilter.text.toLowerCase())
                            )
                            : vacancy})
                        .map( (vacancy, id) => (
                            <RatingTableVacancy key={id} data={vacancy}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RatingTable;