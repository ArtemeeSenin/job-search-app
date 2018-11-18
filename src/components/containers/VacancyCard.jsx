import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import { deleteVacancy } from '../../actions/vacancies'

class VacancyCard extends Component {
    // shouldComponentUpdate(nextProps, nextState){
    //     if(nextProps.vacancies.length !== this.props.vacancies.length){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    deleteAction(id){
        this.props.dispatch(deleteVacancy(id));
        this.props.history.push('/account/rating')
    }
    render() {
        const data = this.props.vacancy
        const features = [];
        if( !data ){
            // this.props.history.push('/not-found');
            return (<h2 style={{textAlign: 'center'}}>Loading..</h2>);
        }

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
                        <Link className="button" to='/account/rating'>See rating</Link>
                        <Link className="button" to={`/account/vacancy/edit/${data.id }`}>Edit</Link>
                        <button className="button" onClick={(e) => { this.deleteAction(data.id)}}>Delete</button>
                    </div>
                </footer>
            </article>
        )
    }
}

function mapStateToProps(state, ownProps) {
    const { vacancies, dispatch } = state;
    const vacancy = vacancies.filter((vacancy) => { return vacancy.id === ownProps.match.params.id })[0];
    return {
        vacancy,
        dispatch
    };
}

export default connect(mapStateToProps)(VacancyCard);