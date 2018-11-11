import React from 'react'
import { reduxForm } from 'redux-form'
import VacancyForm from './containers/VacancyForm'

const Login = () => (
    <VacancyForm data={{ name: 'Add new vacancy'}}/>
);

export default reduxForm({
    form: 'vacancy'
})(Login);;