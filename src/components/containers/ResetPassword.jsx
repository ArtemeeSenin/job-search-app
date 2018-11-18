import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import ResetPasswordForm from './ResetPasswordForm'

class ResetPassword extends Component{
    constructor(props){
        super(props)
         this.state = {
            text: null
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        this.setState({text: this.props.onResetPassword(e)})
    }
    render(){
        return (
            <div className="sign sign--bg-variation-dark-weak">
                <Link to="/" className="sign__logo-container">
                    <Logo className={"logo--inverse"} />
                </Link>
                <h1 className="heading heading--xxx-large heading--text-center heading--color-inverse">Reset password</h1>
                <ResetPasswordForm onSubmit={this.onSubmit} succesText={this.state.text}/>
            </div>
        )
    }
}

export default ResetPassword;