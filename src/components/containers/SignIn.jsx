import React from 'react'
import Logo from './Logo'
import SignInForm from './SignInForm'

const SignIn = () => (
    <div class="sign sign--bg-variation-light">
        <a href="/" class="sign__logo-container">
            <Logo className={"logo--inverse"} />
        </a>
        <h1 class="heading heading--xxx-large heading--text-center heading--color-inverse">Sign in</h1>
        <SignInForm />
    </div>
)

export default SignIn;