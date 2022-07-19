import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Seja Bem Vindo!</h1>
                    <h2>Uma maneira diferente de lidar com seus cryptoativos</h2>
                    <Link to="/Login">Cadastre-se</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;