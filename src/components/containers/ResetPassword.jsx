import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import ResetPasswordForm from './ResetPasswordForm'

const ResetPassword = () => (
    <div className="sign sign--bg-variation-dark-weak">
        <Link to="/" className="sign__logo-container">
            <Logo className={"logo--inverse"} />
        </Link>
        <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Reset password</h1>
        <ResetPasswordForm />
    </div>
)

export default ResetPassword;