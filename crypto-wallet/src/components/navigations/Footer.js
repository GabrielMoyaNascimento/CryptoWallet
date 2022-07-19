import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'



const MenuBar = () => {

   
    return (
        <footer >
            <div className="footer">
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/AboutUs">Sobre Nós</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>

                <ul className="social">
                    <li>
                        <a href="https://www.instagram.com" target='_blank' ><i className="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com" target='_blank'><i className="fa fa-youtube"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target='_blank'><i className="fa fa-linkedin"></i></a>
                    </li>
                </ul>


                <p>&copy; CryptoWallet. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MenuBar;