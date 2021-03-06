import React, { useState, useRef} from 'react'
import { Link, useHistory } from 'react-router-dom'

import { useInfo } from '../../Context'

import './Header.css'

function Header () {

    const [login, setLogin, role, setRole, username, , , , admin, setAdmin] = useInfo()

    const history = useHistory()

    const [menu, setMenu] = useState(false)

    const menuRef = useRef()


    // linklarga active classini berish uchun function
    const changeClass = (e) => {
        let menuItems = menuRef.current.childNodes
        menuItems.forEach(element => {
            element.className='navbar-item'                          
        })

        e.target.parentElement.className = 'navbar-item active'
        setMenu(false)
    }

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
                    <ul onClick = {changeClass} className="navbar-list" ref={menuRef}>

                        <li className="navbar-item active">
                            <Link to="/" className="nav-link">Asosiy</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about" className="nav-link">Biz Haqimizda</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/teachers" className="nav-link">Ustozlar</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contact" className="nav-link">{admin ? "Xabarlar" : "Bog'lanish"}</Link>
                        </li>
                        <li className="navbar-item">
                            {
                                admin ? (<Link to="/students" className="nav-link">O'quvchilar</Link>) : (
                                role ? (<Link to="/answers" className="nav-link">Savollar</Link>) : (<Link to={login ? "/questions" : "/login"} className="nav-link">Savol Yo'llash</Link>))
                            }
                        </li>
                    </ul>
                    <div onClick={changeClass} className="navbar-btn__box">
                        {
                            login ? (
                                <div>
                                    <h3 className='username'><i className='fa fa-1x fa-user user-icon'></i>{username}</h3>
                                    <Link to="/login" onClick = {() => {
                                        setLogin(false)
                                        setRole(false)
                                        setAdmin(false)
                                        window.localStorage.removeItem('access_token')
                                        window.localStorage.removeItem('user_id')
                                        window.localStorage.removeItem('username')
                                        history.push('/login')
                                    }} className='navbar-btn'>Chiqish</Link>
                                </div>
                            ) : (
                                <div>
                                    <Link to='/login' className='navbar-btn'>Kirish</Link>
                                    <Link to='/signup' className='navbar-btn'>Register</Link>
                                </div>

                            )
                        }
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Header

