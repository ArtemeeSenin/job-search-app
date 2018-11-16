import React from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from './CardHeader'
import { Field } from 'redux-form'
import { Text, Textarea, Checkbox, Radio } from '../fields'
import {
    required
} from '../validation'

const toNumber = value => parseInt(value);
// const minutesToHours = value => Math.floor(value / 60)

const VacancyForm = (props) => {
    const { handleSubmit, deleteAction, history, match } = props;
    const id = match.params.id ? match.params.id : null;

    return (
        <article className="card-info">
            <CardHeader data={{pageName: "Add new vacancy"}} />
            <form onSubmit={handleSubmit} className="linear-form" noValidate id="vacancy" autoComplete="off">
                <Field
                    name="position"
                    component={Text}
                    type="text"
                    label="Name"
                    placeholder="Offered position"
                    inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                    validate={[required]}
                />
                <Field
                    name="company"
                    component={Text}
                    type="text"
                    label="Company"
                    placeholder="Company name"
                    inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                    validate={[required]}
                />
                <Field
                    name="salary"
                    component={Text}
                    type="number"
                    label="Salary ₽"
                    placeholder="Salary amount"
                    inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                    normalize={toNumber}
                    validate={[required]}
                />
                <Field
                    name="workDay"
                    component={Text}
                    type="number"
                    label="Work day (min.)"
                    placeholder="The duration of the working day"
                    inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                    normalize={ toNumber }
                    validate={[required]}
                />
                <Field
                    name="inTheWay"
                    component={Text}
                    type="number"
                    label="In the way time (min.)"
                    placeholder="Minutes"
                    inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                    normalize={ toNumber }
                    validate={[required]}
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
                    validate={[required]}
                />
                <Radio
                    label="Status"
                    name="status"
                    list={[
                        "candidate",
                        "offer",
                        "declined",
                        "not suitable"
                    ]}
                />
            </form>
            <footer className="card-info__footer">
                <div className="card-info__footer-buttons-container">
                    <button type="submit" form="vacancy" className="button">Save</button>
                    {id ? <button className="button" onClick={(e) => { deleteAction(id) }}>Delete</button> : null}
                    <button onClick={ history.goBack } className="button">Cancel</button>
                </div>
            </footer>
        </article>
    )
};
export default reduxForm({
    form: 'vacancy'
})(VacancyForm);