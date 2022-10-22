import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo align" href='/'>CryptoWallet</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Início</a></li>
                    <li><a href="/aboutUs">Sobre Nós</a></li>
                    <li><a href="/login">Login</a></li>      
                    <li><a href="/dashboard">Dashboard provisório</a></li> 
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;