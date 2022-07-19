import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>CryptoWallet</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Início</a></li>
                    <li><a href="/AboutUs">Sobre Nós</a></li>
                    <li><a href="/ContactUs">Contate-nos</a></li>
                    <li><a href="/Login">Login</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;