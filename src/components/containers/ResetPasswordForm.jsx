import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Text } from '../fields'

const ResetPasswordForm = () => (
    <form className="form" action="#" method="POST">
        <Field
            name="login"
            component={Text}
            type="text"
            label="Login"
            placeholder="Your email address"
        />
        <div className="sign__label-text">Remembered your password?</div>
        <a to="/sign-in" className="button button--shadow">Sign in</a>
    </form>
)

export default reduxForm({
    form: 'signin'
})(ResetPasswordForm);
