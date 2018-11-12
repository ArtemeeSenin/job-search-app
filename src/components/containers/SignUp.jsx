import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'

const SignUp = () => (
    <div className="sign sign--bg-variation-medium">
        <Link to="/" className="sign__logo-container">
            <Logo className={"logo--inverse"} />
        </Link>
        <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Sign Up</h1>
        <SignUpForm />
    </div>
)

export default SignUp;