import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Text } from '../fields'

const SignInForm = () => (
    <form className="form" action="#" method="POST">
        <Field
            name="login"
            component={Text}
            type="text"
            label="Login"
            placeholder="Your email address"
            errorMessage=""
        />
        <Field
            name="login"
            component={Text}
            type="password"
            label="Password"
            placeholder=""
            errorMessage="Wrong login or password"
        />
        <a to="/sign-reset" className="button button--hint">I can't log in</a> <br />
        <button type="submit" className="button button--shadow">Log in</button>
        <div className="sign__label-text">Don't have an account yet?</div>
        <a to="/sign-up" className="button button--shadow">Sign up</a>
    </form>
)

export default reduxForm({
    form: 'signin'
})(SignInForm);
