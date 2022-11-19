import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";

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
              <button
                className="btn btn-primary form-control mt-5 mb-5 "
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Cadastrar
              </button>
            </form>
            <hr />
            <button className="btn btn-secondary form-control mt-3 mt-5">
              Minhas carteiras
            </button>
          </div>
        </div>
      </section>
      <br />
      <br />

      <Footer />
    </React.Fragment>
  );
};
export default Cadastro;
