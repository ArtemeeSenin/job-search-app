import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from './CardHeader'
import { Field, FieldArray, change } from 'redux-form'
import { Text, Textarea, Checkbox, Radio } from '../fields'
import {
    required,
    requiredRadio
} from '../validation'
import AwesomeDebouncePromise from 'awesome-debounce-promise'

const toNumber = value => parseInt(value);

const searchAPI = text => fetch('https://autocomplete.clearbit.com/v1/companies/suggest?query=' + encodeURIComponent(text));
const searchAPIDebounced = AwesomeDebouncePromise(searchAPI, 600);

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const companyDescriptionAPI = name => fetch(proxyUrl + 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=' + encodeURIComponent(name));

class VacancyForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            companyNameAutocomplete: [],
            companyDescriptionAutocomplete: ''
        }
    }
    handleTextChange = async text => {
        const result = await searchAPIDebounced(text);
        const data = await result.json()
        this.setState({ companyNameAutocomplete: data })
    };
    getCompanyDescription = async name => {
        const result = await companyDescriptionAPI(name);
        const data = await result.json()
        let description = '';
        for( let k in data.query.pages){
            description += data.query.pages[k].extract
        }
        this.props.dispatch(change('vacancy', 'companyDescription', description))
    }
    componentWillUnmount() {
        this.setState = () => { };
    }
    render() {
        const { handleSubmit, deleteAction, history, match } = this.props;
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
                        onChange={ (e, value) => { if(value) this.handleTextChange(value) } }
                    />
                    <ul className="linear-form__company-autocomplete">
                        {this.state.companyNameAutocomplete.map( (el, id) =>
                            <li
                                className="linear-form__company-autocomplete-item"
                                key={id}
                                onClick={() => {
                                    this.props.dispatch(change('vacancy', 'company', el.name))
                                    this.props.dispatch(change('vacancy', 'companyLogo', el.logo))
                                    this.getCompanyDescription(el.name)
                                }}
                            >{el.name} | {el.domain}</li>
                        )}
                    </ul>
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
                        label="Work day (h.)"
                        placeholder="The duration of the working day"
                        inputModifiers="text-input__field--dark-border text-input__field--fw-normal"
                        normalize={toNumber}
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
                    <FieldArray
                        label="Status"
                        name="statusRadio"
                        radioName="status"
                        fields={[
                            "candidate",
                            "offer",
                            "declined",
                            "not suitable"
                        ]}
                        component={Radio}
                        validate={[requiredRadio]}
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
    }
};
export default reduxForm({
    form: 'vacancy'
})(VacancyForm);