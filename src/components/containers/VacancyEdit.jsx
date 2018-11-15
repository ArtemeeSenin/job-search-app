import React from 'react'
import { withRouter } from 'react-router-dom'
import VacancyForm from './VacancyForm'
import { connect } from 'react-redux'
import { addVacancy } from '../../actions/vacancies'

const VacancyEdit = (props) => {
    const { history, dispatch } = props;
    const submit = values => {
        console.log(JSON.stringify(values, null, 2))
        dispatch(addVacancy(values));

    }
    return(
        <VacancyForm onSubmit={submit} history={history}/>
    );
}

// function mapStateToProps(props){
//     console.log('PROPS', props)
//     return {

//     }
// }
export default connect()(withRouter(VacancyEdit));