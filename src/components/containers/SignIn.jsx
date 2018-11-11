import React from 'react'
import Logo from './Logo'
import SignInForm from './SignInForm'

const SignIn = () => (
    <div className="sign sign--bg-variation-light">
        <a href="/" className="sign__logo-container">
            <Logo className={"logo--inverse"} />
        </a>
        <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Sign in</h1>
        <SignInForm />
    </div>
)

export default SignIn;