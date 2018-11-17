import React, { Component }from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'

class SignUp extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        this.props.onLogin(e)
    }
    render() {
        return (
            <div className="sign sign--bg-variation-medium">
                <Link to="/" className="sign__logo-container">
                    <Logo className={"logo--inverse"} />
                </Link>
                <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Sign Up</h1>
                <SignUpForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default SignUp;