import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import Logo from './Logo'

class NavMenu extends Component{
    constructor(){
        super();
        this.state = {
            hamburder: false
        }
        this.bodyInactive = this.bodyInactive.bind(this)
    }
    componentWillUnmount(){
        document.body.className = '';
        this.setState({hamburger: false})
    }
    bodyInactive(e){
        document.body.className = '';
        this.setState({hamburger: false})
    }
    render(){
            return (
            <header className="header">
                <div className="container">
                    <nav className="main-nav">
                        <NavLink to="/account/rating" className="main-nav__logo-container">
                            <Logo />
                        </NavLink>
                        <button
                            type="button"
                            className={cx(
                                'hamburger',
                                'hamburger--collapse',
                                {'is-active': this.state.hamburger}
                            )}
                            onClick={() => {
                                this.setState({hamburger: !this.state.hamburger});
                                document.body.classList.toggle('is-menu-active');
                            }}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                        <ul className="nav-list">
                            <li className="nav-list__item"><NavLink to="/account/rating" className="nav-list__item-link" onClick={this.bodyInactive}>Rating</NavLink></li>
                            <li className="nav-list__item"><NavLink to="/account/vacancy/add" className="nav-list__item-link" onClick={this.bodyInactive}>Add new vacancy</NavLink></li>
                            <li className="nav-list__item nav-list__item--divide"><NavLink to="/logout" className="nav-list__item-link" onClick={this.bodyInactive}>Logout</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default NavMenu;