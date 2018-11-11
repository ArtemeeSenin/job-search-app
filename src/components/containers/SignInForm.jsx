import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Text } from '../fields'

const SignInForm = () => (
    <form action="#" className="form" method="POST">
        <Field
            name="login"
            component={Text}
            type="text"
        />
    </form>
)

export default reduxForm({})(SignInForm);
