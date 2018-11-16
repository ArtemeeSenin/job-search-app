import React from 'react'
import { withRouter } from 'react-router-dom'
import VacancyForm from './VacancyForm'
import { connect } from 'react-redux'
import { addVacancy, updateVacancy, deleteVacancy } from '../../actions/vacancies'

const VacancyEdit = (props) => {
    const { history, match, dispatch } = props;
    const data = props.vacancies.filter((vacancy) => { return vacancy.id === match.params.id })[0]
    const submit = (values) => {
        console.log(JSON.stringify(values, null, 2))

        match.params.id
            ? dispatch(updateVacancy(values))
            : dispatch(addVacancy(values))

        history.push('/rating')

    }
    const deleteAction = (id) => {
        dispatch(deleteVacancy(id));
        history.push('/rating')
    }
    return(
        <VacancyForm onSubmit={submit} history={history} match={match} initialValues={data} deleteAction={deleteAction}/>
    );
}

function mapStateToProps(state){
    const { vacancies } = state
    return {
        vacancies
    }
}
export default connect(mapStateToProps)(withRouter(VacancyEdit));