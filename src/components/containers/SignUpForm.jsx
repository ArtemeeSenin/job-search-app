import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Text } from '../fields'

const SignUpForm = () => (
    <form className="form" action="#" method="POST">
        <Field
            name="login"
            component={Text}
            type="text"
            label="Login"
            placeholder="Your email address"
        />
        <Field
            name="password"
            component={Text}
            type="password"
            label="Password"
            placeholder=""
        />
        <Field
            name="confirmPassword"
            component={Text}
            type="password"
            label="Repeat password"
            placeholder=""
        />
        <button type="submit" className="button button--shadow">Register</button>
        <div className="sign__label-text">Already have an account?</div>
        <Link to="/sign-up" className="button button--shadow">Sign in</Link>
    </form>
)

export default reduxForm({
    form: 'signup'
})(SignUpForm);
