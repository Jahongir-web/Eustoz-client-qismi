import React from 'react'

import './Header.css'

function Header () {

    return (
        <header className='site-header menu-open'>
            <div className="container">
                <div className="site-header__top">
                    <div className="logo-box">
                        <a className='logo-link' href="/">
                            <h1 className='logo-text'><span className='text-primary'>E</span>Ustoz</h1>
                        </a>
                    </div>
                    <div className="header-box">
                        <i className='fa fa-2x fa-map-marker-alt font-icon'></i>
                        <div>
                            <h4 className="header-box__text">Our Office</h4>
                            <address className='header-box__sub-text'>48/5, A.Temur, Tashkent, UZB</address>
                        </div>
                    </div>
                    <div className="header-box">
                        <i className='fa fa-2x fa-envelope font-icon'></i>
                        <div>
                            <h4 className="header-box__text">Email Us</h4>
                            <a className='header-box__sub-text' href="mailto:jahongirmh@gmail.com">jahongirmh@gmail.com</a>
                        </div>
                    </div>
                    <div className="header-box">
                        <i className='fa fa-2x fa-phone font-icon'></i>
                        <div>
                            <h4 className="header-box__text">Call Us</h4>
                            <a className='header-box__sub-text' href="tel:+99899 790 87 49">+99899 790-87-49</a>
                        </div>
                    </div>

                    <button className='menu-btn'>
                        <span className='menu-span menu-span__first'></span>
                        <span className='menu-span menu-span__second'></span>
                        <span className='menu-span menu-span__third'></span>
                    </button>

                </div>
            </div>
            <hr/>

            <div className="container">
                <nav className='site-header__nav'>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="/" className="nav-link active">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="nav-link">About</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="nav-link">Teachers</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="nav-link">Contact</a>
                        </li>
                        <li className="navbar-item">
                            <a href="/" className="nav-link">Ask Question</a>
                        </li>
                    </ul>
                    <div className="navbar-btn__box">
                        <button className='navbar-btn'>Sign In</button>
                        <button className='navbar-btn'>Sign Up</button>
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Header

