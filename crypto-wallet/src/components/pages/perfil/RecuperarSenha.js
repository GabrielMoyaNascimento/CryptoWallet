import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import { InputMask } from 'primereact/inputmask';


const Senha = () => {

  return (
    <React.Fragment>
      <MenuBarLogged />
      <div style={{ padding: "10%" }} className="col">
        <div style={{ padding: "0 25% 0 25%" }} className="row">
          <div className="col-6 px-5">
            <h1>Alterar Senha:</h1>
            <p>Nova Senha:</p>
            <input
              name="password"
              className="form-control"
              placeholder="Escreva a senha atual"
              type="password"
              tabIndex="1"
              required
              autoFocus
            />
            <p className="mt-2">Repetir Senha:</p>
            <input
              name="confirmPassword"
              className="form-control"
              placeholder="Escreva a nova senha"
              type="password"
              tabIndex="2"
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
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Senha;
