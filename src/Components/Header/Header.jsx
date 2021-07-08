import React, { useState} from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

function Header () {

    const [menu, setMenu] = useState(false)

    return (
        <header className={ menu ? 'site-header menu-open' : 'site-header'}>
            <div className="container">
                <div className="site-header__top">
                    <div className="logo-box">
                        <Link className='logo-link' to="/">
                            <h1 className='logo-text'><span className='text-primary'>E</span>Ustoz</h1>
                        </Link>
                    </div>
                    <div className="header-box">
                        <i className='fa fa-2x fa-map-marker-alt font-icon'></i>
                        <div>
                            <h4 className="header-box__text">Bizning Offic</h4>
                            <address className='header-box__sub-text'>48/5, A.Temur, Toshkent, UZB</address>
                        </div>
                    </div>
                    <div className="header-box">
                        <i className='fa fa-2x fa-envelope font-icon'></i>
                        <div>
                            <h4 className="header-box__text">Email </h4>
                            <a className='header-box__sub-text' href="mailto:jahongirmh@gmail.com">jahongirmh@gmail.com</a>
                        </div>
                    </div>
                    <div className="header-box">
                        <i className='fa fa-2x fa-phone font-icon'></i>
                        <div>
                            <h4 className="header-box__text">Telefon </h4>
                            <a className='header-box__sub-text' href="tel:+99899 790 87 49">+99899 790-87-49</a>
                        </div>
                    </div>

                    <button onClick={() => setMenu(!menu)} className='menu-btn'>
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
                            <Link to="/" className="nav-link active">Asosiy</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">Biz Haqimizda</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/teachers" className="nav-link">Ustozlar</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact" className="nav-link">Bog'lanish</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/questions" className="nav-link">Savol Yo'llash</Link>
                        </li>
                    </ul>
                    <div className="navbar-btn__box">
                        <Link to='/login' className='navbar-btn'>Kirish</Link>
                        <Link to='/signup' className='navbar-btn'>Register</Link>
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Header

