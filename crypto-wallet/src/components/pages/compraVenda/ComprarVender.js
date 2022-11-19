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
              <h1 className="mb-3">Compra/Venda de Moedas:</h1>
              <input
                className="form-check-input"
                type="checkbox"
                id="topping"
                name="topping"
              />
              Compra
              <input
                className="form-check-input"
                type="checkbox"
                id="topping"
                name="topping"
              />
              Venda
              <div className="dropdown mt-2 mb-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Moeda
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item">Bitcoin</a>
                  <a className="dropdown-item">Ethereum</a>
                </div>
              </div>
              <fieldset>
                <p>Valor:</p>
                <input
                  className="form-control"
                  placeholder="Insira o nome da carteira"
                  type="text"
                  tabIndex="1"
                  required
                  autoFocus
                />
              </fieldset>
              
              <button
                className="btn btn-primary form-control mt-5 mb-5 "
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
              >
                Salvar
              </button>
            </form>
            <hr />
            <a  href="/compraVenda/Lista" style={{color: 'white', textDecoration: 'none'}}>
            <button className="btn btn-secondary form-control mt-3 mt-5">
            Histórico de movimentações
            </button>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default Cadastro;
