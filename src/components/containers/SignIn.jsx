import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import SignInForm from './SignInForm'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        this.props.onLogin()
    }
    render() {
        return (
            <div className="sign sign--bg-variation-light">
                <Link to="/" className="sign__logo-container">
                    <Logo className={"logo--inverse"} />
                </Link>
                <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Sign in</h1>
                <SignInForm onSubmit={ this.onSubmit } />
            </div>
        )
    }
}

export default SignIn;