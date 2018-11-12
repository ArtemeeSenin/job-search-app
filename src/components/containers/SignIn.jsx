import React, { Component } from 'react'
import Logo from './Logo'
import SignInForm from './SignInForm'

class SignIn extends Component {
    onSubmit() {
        this.props.onLogin({
            user: 'Artem'
        });
    }
    render() {
        return (
            <div className="sign sign--bg-variation-light">
                <a href="/" className="sign__logo-container">
                    <Logo className={"logo--inverse"} />
                </a>
                <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Sign in</h1>
                <SignInForm />
                <button onClick={this.onSubmit()}>Login</button>
            </div>
        )
    }
}

export default SignIn;