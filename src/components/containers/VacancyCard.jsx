import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import { deleteVacancy } from '../../actions/vacancies'

class VacancyCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            vacancy: props.vacancies.filter((vacancy) => { return vacancy.id === props.match.params.id })[0]
        }
    }
    deleteAction(id){
        this.props.dispatch(deleteVacancy(id));
        this.props.history.push('/rating')
    }
    render() {
        const data = this.state.vacancy;
        const features = [];
        if (data.workDay) features.push({ type: 'clock', text: Math.ceil(data.workDay / 60) + 'h. work day'})
        if (data.inTheWay) features.push({type: 'bus', text: data.inTheWay + 'm. in the way'})
        if (data.isInteresting) features.push({type: data.isInteresting ? 'smile' : 'frown', text: 'Is interesting'})
        if (data.requiresAdditionalStudying) features.push({type: 'graduation-cap', text: 'Requires additional studying'})

        return(
            <article className="card-info">
                <CardHeader data={{pageName: data.position, company: data.company, salary: data.salary, id: data.id}}/>
                <CardContent data={data} features={features}/>
                <footer className="card-info__footer">
                    <div className="card-info__footer-buttons-container">
                        <Link className="button" to='/rating'>See rating</Link>
                        <Link className="button" to={`/vacancy/edit/${data.id }`}>Edit</Link>
                        <button className="button" onClick={(e) => { this.deleteAction(data.id)}}>Delete</button>
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