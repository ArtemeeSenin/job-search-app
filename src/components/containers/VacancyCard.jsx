import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CardHeader from './CardHeader'
import CardContent from './CardContent'


class VacancyCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            vacancy: props.vacancies.filter((vacancy) => { return vacancy.id === props.match.params.id })[0]
        }
    }
    render() {
        console.log(this.state.vacancy)
        const data = this.state.vacancy;
        const features = [];
        if (data.workDay) features.push({type: 'clock', text: ~~(data.workDay / 60) + 'h. work day'})
        if (data.inTheWay) features.push({type: 'bus', text: data.inTheWay + 'm. in the way'})
        if (data.isInteresting) features.push({type: data.isInteresting ? 'smile' : 'frown', text: 'Is interesting'})
        if (data.requiresAdditionalStudying) features.push({type: 'graduation-cap', text: 'Requires additional studying'})

        return(
            <article className="card-info">
                <CardHeader data={{pageName: data.position, company: data.company, salary: data.salary}}/>
                <CardContent data={data} features={features}/>
                <footer className="card-info__footer">
                    <div className="card-info__footer-buttons-container">
                        <Link className="button" to='/rating'>See rating</Link>
                        <Link className="button" to={`/vacancy/edit/${data.id }`}>Edit</Link>
                        <Link className="button" to={`/delete${data.id}`}>Delete</Link>
                    </div>
                </footer>
            </article>
        )
    }
}

function mapStateToProps(state) {
    const { vacancies, dispatch } = state;
    return {
        vacancies,
        dispatch
    };
}

export default connect(mapStateToProps)(VacancyCard);


    // const data = {
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
    // }

    // const features = [
    //     {
    //         type: "clock",
    //         text: "8 h.working day"
    //     },
    //     {
    //         type: "bus",
    //         text: "1 h. 20 min. in the way"
    //     },
    //     {
    //         type: "graduation-cap",
    //         text: "Additional studying is required"
    //     },
    //     {
    //         type: "smile",
    //         text: "Interesting"
    //     },
    // ]