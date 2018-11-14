import React from 'react';
import { connect } from 'react-redux'
import RatingTableVacancy from './RatingTableVacancy';

const RatingTable = (props) => {
    // const vacancyList = [{
    //     position: "Senior front-end developer",
    //     company: "Epic Company",
    //     salaryNumber: "220 000",
    //     salaryCurrency: "₽",
    //     status: "Offer",
    //     workingDay: "8 h.",
    //     inTheWay: "1 h. 20 min.",
    //     additionalStudying: true,
    //     interesting: "smile",
    //     comment: "Frontend developer at Quby you will work primarily on our hybrid mobile application which is targeted at our energy utility’s end users. Frontend developer at Quby you will work primarily on our hybrid mobile application which is targeted at our energy utility’s end users."
    // },
    // {
    //     position: "Senior front-end developer",
    //     company: "Epic Company",
    //     salaryNumber: "220 000",
    //     salaryCurrency: "₽",
    //     status: "Declined",
    //     workingDay: "8 h.",
    //     inTheWay: "1 h. 20 min.",
    //     additionalStudying: true,
    //     interesting: "frown",
    //     comment: "Frontend developer at Quby you will work primarily on our hybrid mobile application which is targeted at our energy utility’s end users. Frontend developer at Quby you will work primarily on our hybrid mobile application which is targeted at our energy utility’s end users."
    // }]

    const { vacancies, visibilityFilter } = props;

    return (
        <div className="rating-table">
            <table className="rating-table__table">
                <tbody>
                    { vacancies.map( (vacancy, key) => (
                        <RatingTableVacancy key={key} data={vacancy}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        vacancies: state.vacancies,
        visibilityFilter: state.visibilityFilter
    }
}
export default connect(mapStateToProps)(RatingTable);