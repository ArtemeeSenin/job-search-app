import React from 'react'
import Logo from './Logo'

const NavMenu = () => (
    <header className="header">
        <div className="container">
            <nav className="main-nav">
                <a to="/rating" className="main-nav__logo-container">
                    <Logo />
                </a>
                <button className="hamburger hamburger--collapse" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <ul className="nav-list">
                    <li className="nav-list__item"><a className="nav-list__item-link" to="/rating">Rating</a></li>
                    <li className="nav-list__item"><a className="nav-list__item-link" to="/card-info">Add new vacancy</a></li>
                    <li className="nav-list__item"><a className="nav-list__item-link" to="/login">Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default NavMenu;