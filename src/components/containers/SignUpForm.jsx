import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import {
    required,
    matchesPassword,
    isEmail
} from '../validation'
import { Text } from '../fields'

const SignUpForm = (props) => {
    const { handleSubmit, onSubmit } = props;
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="form" autoComplete="off">
            <Field
                name="login"
                component={Text}
                type="text"
                label="Login"
                placeholder="Your email address"
                normalize={(str) => str.toLowerCase()}
                validate={[required, isEmail]}
            />
            <Field
                name="password"
                component={Text}
                type="password"
                label="Password"
                placeholder=""
                validate={[required]}
            />
            <Field
                name="confirmPassword"
                component={Text}
                type="password"
                label="Repeat password"
                placeholder=""
                validate={[required, matchesPassword]}
            />
            <button type="submit" className="button button--shadow">Register</button>
            <div className="sign__label-text">Already have an account?</div>
            <Link to="/sign-in" className="button button--shadow">Sign in</Link>
        </form>
    )
}

export default reduxForm({
    form: 'signup'
})(SignUpForm);
