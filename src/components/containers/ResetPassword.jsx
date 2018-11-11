import React from 'react'
import Logo from './Logo'
import ResetPasswordForm from './ResetPasswordForm'

const ResetPassword = () => (
    <div className="sign sign--bg-variation-dark-weak">
        <a href="/" className="sign__logo-container">
            <Logo className={"logo--inverse"} />
        </a>
        <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Reset password</h1>
        <ResetPasswordForm />
    </div>
)

export default ResetPassword;