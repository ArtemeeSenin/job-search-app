import React from 'react'
import { reduxForm } from 'redux-form'
import CompanyForm from './CompanyForm'

const CompanyEdit = () => (
    <CompanyForm data={{ name: 'Edit company' }} />
);

export default reduxForm({
    form: 'company'
})(CompanyEdit);;