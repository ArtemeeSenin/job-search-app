import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
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
        <button type="submit" className="button button--shadow">Reset</button>
        <div className="sign__label-text">Remembered your password?</div>
        <Link to="/sign-in" className="button button--shadow">Sign in</Link>
    </form>
)

export default reduxForm({
    form: 'resetpassword'
})(ResetPasswordForm);
