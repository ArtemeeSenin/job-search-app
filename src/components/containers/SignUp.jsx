import React from 'react'
import Logo from './Logo'
import SignUpForm from './SignUpForm'

const SignUp = () => (
    <div className="sign sign--bg-variation-medium">
        <a href="/" className="sign__logo-container">
            <Logo className={"logo--inverse"} />
        </a>
        <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Sign Up</h1>
        <SignUpForm />
    </div>
)

export default SignUp;