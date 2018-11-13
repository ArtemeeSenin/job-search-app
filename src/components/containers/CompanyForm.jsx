import React from 'react'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import { Field } from 'redux-form'
import { Text, Textarea } from '../fields'

const links = [
    {
        text: "Save",
        path: '/company/1'
    },
    {
        text: "Cancel",
        path: '/company/1'
    }
]

// const toNumber = value => parseInt(value);
// const minutesToHours = value => Math.floor(value / 60)

const CompanyForm = ({ data }) => (
    <article className="card-info">
        <CardHeader data={{ name: data.name }} />
        <form action="" className="linear-form" noValidate>
            <Field
                name="company"
                component={Text}
                type="text"
                label="Name"
                placeholder="Company name"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
            />
            <Field
                name="companyDescription"
                component={Textarea}
                label="Description"
                placeholder="Describe what this company does"
                rows="5"
                cols="45"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal text-input__field--area"
            />
            <Field
                name="companyCommentary"
                component={Textarea}
                label="Personal commentary"
                placeholder="What do you think about working here"
                rows="3"
                cols="45"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal text-input__field--area"
            />
        </form>
        <CardFooter links={links} />
    </article>
);
export default CompanyForm;