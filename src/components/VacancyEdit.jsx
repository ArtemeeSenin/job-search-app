import React from 'react'
import { reduxForm } from 'redux-form'
import VacancyForm from './containers/VacancyForm'

const VacancyEdit = () => (
    <VacancyForm data={{ name: 'Add new vacancy'}}/>
);

export default reduxForm({
    form: 'vacancy'
})(VacancyEdit);;