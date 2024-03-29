import React from "react";

import "./MenuBarLogged.css";

const MenuBar = () => {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a className="logo" href="/">
          CryptoWallet
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <a href="/dashboard">Início</a>
          </li>
          <li>
            <a href="/carteira/Cadastro">Carteira</a>
          </li>
          <li>
            <a href="/moeda/Cadastro">Moedas</a>
          </li>
          <li>
            <a href="/perfil/Editar">Perfil</a>
          </li>
          <li>
            <a href="/">Sair</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
