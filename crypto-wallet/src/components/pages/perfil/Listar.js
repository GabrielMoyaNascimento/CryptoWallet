import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import { InputMask } from 'primereact/inputmask';

const Perfil = () => {
  return (
    <React.Fragment>
      <MenuBarLogged />
      <div style={{ padding: "10%" }} className="col">
        <div style={{ padding: "0 25% 0 25%" }} className="row">
          <div className="col-6">
            <h1>Editar Perfil:</h1>
            <form>
            <p>Nome:</p>
            <input
              className="form-control"
              placeholder="Escreva seu nome"
              type="text"
              tabIndex="1"
              required
              autoFocus
            />
            <p>E-mail:</p>
            <input
              className="form-control"
              placeholder="Endereço de e-mail"
              type="email"
              tabIndex="2"
              required
            />
            <p>Telefone:</p>
            <InputMask mask="(99) 99999-9999"
            className="form-control"
            placeholder="Número de telefone "
            type="tel"
            tabIndex="3"
            required
            ></InputMask>
            
            <p>CPF:</p>
            <InputMask               
              className="form-control"
              placeholder="000.000.000-00"
              type="text"
              tabIndex="4"
              required
              autoFocus mask="999.999.999-99"></InputMask>
            <p>Senha:</p>
            <input
              className="form-control"
              placeholder="Senha"
              type="password"
              tabIndex="5"
              required
            />
            <button
              className="btn btn-primary form-control mt-3"
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Salvar
            </button>
            </form>
            <hr/>
            <a href="/senha/Editar" style={{color: 'white', textDecoration: 'none'}}>
            <button
              className="btn btn-secondary form-control mt-3"
            >
              Recuperar senha
            </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Perfil;
