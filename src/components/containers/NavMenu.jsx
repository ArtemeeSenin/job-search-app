import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const NavMenu = () => (
    <header className="header">
        <div className="container">
            <nav className="main-nav">
                <NavLink to="/account/rating" className="main-nav__logo-container">
                    <Logo />
                </NavLink>
                <button className="hamburger hamburger--collapse" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <ul className="nav-list">
                    <li className="nav-list__item"><NavLink to="/account/rating" className="nav-list__item-link">Rating</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/account/vacancy/add" className="nav-list__item-link">Add new vacancy</NavLink></li>
                    <li className="nav-list__item"><NavLink to="/logout" className="nav-list__item-link">Logout</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
);

export default NavMenu;