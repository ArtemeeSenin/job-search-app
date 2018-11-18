import React from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { Text } from '../fields'
import {
    required,
    isEmail
} from '../validation'

const ResetPasswordForm = (props) => {
    const { handleSubmit, onSubmit, succesText } = props;
    return(
        <form className="form" onSubmit={ handleSubmit(onSubmit) }>
            { !succesText
                ? <>
                    <Field
                        name="login"
                        component={Text}
                        type="text"
                        label="Login"
                        placeholder="Your email address"
                        normalize={(str) => str.toLowerCase()}
                        validate={[required, isEmail]}
                        />
                        <button type="submit" className="button button--shadow">Reset</button>
                        <div className="sign__label-text">Remembered your password?</div>
                    </>
                : <div className="sign__label-text">{succesText}</div>
            }
            <Link to="/sign-in" className="button button--shadow">Sign in</Link>
        </form>
    )
}

export default reduxForm({
    form: 'resetpassword'
})(ResetPasswordForm);
