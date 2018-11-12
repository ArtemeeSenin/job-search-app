import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Text } from '../fields'

const SignInForm = () => (
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
        <Link to="/sign-reset" className="button button--hint">I can't log in</Link> <br />
        <button type="submit" className="button button--shadow">Log in</button>
        <div className="sign__label-text">Don't have an account yet?</div>
        <Link to="/sign-up" className="button button--shadow">Sign up</Link>
    </form>
)

export default reduxForm({
    form: 'signin'
})(SignInForm);
