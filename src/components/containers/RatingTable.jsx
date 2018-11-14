import React from 'react';
import { connect } from 'react-redux'
import RatingTableVacancy from './RatingTableVacancy';

const RatingTable = (props) => {
    const { vacancies, visibilityFilter } = props;

    return (
        <div className="rating-table">
            <table className="rating-table__table">
                <tbody>
                    { vacancies.filter( (vacancy) => { return visibilityFilter.length ? visibilityFilter.includes(vacancy.status) : vacancy }).map( (vacancy, key) => (
                        <RatingTableVacancy key={key} data={vacancy}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
function mapStateToProps(state) {
    let { vacancies } = state;
    const comparevacancies = (a, b) => {
        return statusCompare(a, b);
    }
    const profitCompare = (a, b) => {
        const aProfit = ~~(a.salary / (a.workDay + a.inTheWay));
        const bProfit = ~~(b.salary / (b.workDay + b.inTheWay));
        return bProfit - aProfit;
    }
    const interestCompare = (a, b) => {
        if (a.isInteresting === b.isInteresting) return profitCompare(a, b)
        else return !a.isInteresting
    }
    const statusCompare = (a, b) => {
        if (a.status === b.status) return interestCompare(a, b)
        else if (a.status === 'offer') return -1
        else if (b.status === 'offer') return 1
        else if (a.status === 'candidate') return -1
        else if (b.status === 'candidate') return 1
        else if (a.status === 'not suitable') return -1
        else if (b.status === 'not suitable') return 1
    }
    vacancies.sort(comparevacancies);

    return {
        vacancies,
        visibilityFilter: state.visibilityFilter
    }
}
export default connect(mapStateToProps)(RatingTable);