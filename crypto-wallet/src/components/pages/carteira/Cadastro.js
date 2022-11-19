import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import { Checkbox } from "@material-ui/core";

const Cadastro = () => {
  return (
    <React.Fragment>
      <MenuBarLogged />

      <section className="content-container">
        <div style={{ padding: "10%" }} className="col">
          <div style={{ padding: "0 25% 0 25%" }} className="row">
            <form id="register" action="">
              <h1>Cadastro de Carteira:</h1>
              <fieldset>
                <p>Nome:</p>
                <input
                  className="form-control"
                  placeholder="Insira o nome da carteira"
                  type="text"
                  tabIndex="1"
                  required
                  autoFocus
                />
              </fieldset>
              <input
                className="form-check-input"
                type="checkbox"
                id="topping"
                name="topping"
              />
              Ativo
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default Cadastro;
