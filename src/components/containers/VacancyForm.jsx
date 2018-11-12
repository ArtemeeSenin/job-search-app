import React from 'react'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import { Field } from 'redux-form'
import { Text, Textarea, Checkbox, Radio } from '../fields'

const links = [
    {
        text: "Save",
        path: '/vacancy/1'
    },
    {
        text: "Delete",
        path: '/vacancy/delete'
    },
    {
        text: "Cancel",
        path: '/rating'
    }
]

const toNumber = value => parseInt(value);
// const minutesToHours = value => Math.floor(value / 60)

const VacancyForm = ({ data }) => (
    <article className="card-info">
        <CardHeader data={{ name: data.name }} />
        <form action="" className="linear-form" noValidate>
            <Field
                name="position"
                component={Text}
                type="text"
                label="Name"
                placeholder="Offered position"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
            />
            <Field
                name="company"
                component={Text}
                type="text"
                label="Company"
                placeholder="Company name"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
            />
            <Field
                name="salary"
                component={Text}
                type="number"
                label="Salary ₽"
                placeholder="Salary amount"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                normalize={toNumber}
            />
            <Field
                name="workDay"
                component={Text}
                type="number"
                label="Work day (min.)"
                placeholder="The duration of the working day"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                normalize={ toNumber }
            />
            <Field
                name="inTheWay"
                component={Text}
                type="number"
                label="In the way time (min.)"
                placeholder="Minutes"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                normalize={ toNumber }
            />
            <Field
                name="description"
                component={Textarea}
                label="Description"
                placeholder="Describe what is required on this job"
                rows="5"
                cols="45"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal text-input__field--area"
            />
            <Field
                name="isInteresting"
                component={ Checkbox }
                type="checkbox"
                label="Interesting"
            />
            <Field
                name="requiresAdditionalStudying"
                component={ Checkbox }
                type="checkbox"
                label="Additional studying"
            />

            <Field
                name="commentary"
                component={Textarea}
                label="Personal commentary"
                placeholder="What do you think about getting this job"
                rows="3"
                cols="45"
                inputModifiers="text-input__field--dark-border text-input__field--fw-normal text-input__field--area"
            />
            <Radio
                label="Status"
                name="status"
                list={[
                    "candidate",
                    "offer",
                    "declined",
                    "not interesting"
                ]}
            />
        </form>
        <CardFooter links={ links } />
    </article>
);
export default VacancyForm;