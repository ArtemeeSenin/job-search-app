import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import {
    required,
    isEmail
} from '../validation'
import { Text } from '../fields'

const SignInForm = (props) => {
    const { handleSubmit, onSubmit } = props;
    return (
        <form onSubmit={ handleSubmit(onSubmit) } className="form" autoComplete="off">
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
            <Link to="/reset-password" className="button button--hint">I can't log in</Link> <br />
            <button type="submit" className="button button--shadow">Log in</button>
            <div className="sign__label-text">Don't have an account yet?</div>
            <Link to="/sign-up" className="button button--shadow">Sign up</Link>
        </form>
    )
}

export default reduxForm({
    form: 'signin'
})(SignInForm);
