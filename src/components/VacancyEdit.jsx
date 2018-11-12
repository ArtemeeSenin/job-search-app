import React from 'react'
import VacancyForm from './containers/VacancyForm'
const submit = values => {
    console.log('This', this)
    console.log(JSON.stringify(values,null, 2))
}
const VacancyEdit = () => (
    <VacancyForm onSubmit={submit}/>
);
export default VacancyEdit;