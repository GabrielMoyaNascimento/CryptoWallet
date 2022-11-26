import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";

const Cadastro = () => {

  const valor1 = 2500.00;
  const valor2 = 25.00;
  const valor3 = 500.00;
  const typeBuy = "Compra";
  const typeSell = "Venda";
  var totalCompra = valor1 + valor2;
  var totalVenda = valor3;
  var total = totalCompra - totalVenda;

  return (
    <React.Fragment>
      <MenuBarLogged />

      <section className="content-container">
        <div style={{ padding: "10%" }} className="col">
          <div style={{ padding: "0 25% 0 25%" }} className="row">
            <form id="register" action="">
              <h1 className="mb-3">Compra/Venda de Moedas:</h1>
              <div className="dropdown mt-2 mb-2">
                <button
                  className="btn btn-secondary "
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Moeda
                  <select>
                    <option>BTC</option>
                    <option>ETH</option>
                    <option>XRP</option>
                  </select>
                </button>
              </div>
              <fieldset>
                <p>Valor:</p>
                <input
                  className="form-control"
                  placeholder="Insira o nome da moeda"
                  type="text"
                  tabIndex="1"
                  required
                  autoFocus
                />
              </fieldset>
              <div className="row">
                <div className="col">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="topping"
                    name="topping"
                  />
                  Compra
                  <input
                    className="form-check-input"
                    type="radio"
                    id="topping"
                    name="topping"
                  />
                  Venda
                </div>
              </div>

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
            <div className="row">
              <div className="col">
                <h1>Historico de Compra/Venda:</h1>
                <div className="row">
                <p><b>TOTAL:</b>
                  {"R$" + total.toFixed(2)}</p>
                </div>
                <table className="table mt-5 mb-5">
                  <thead>
                    <tr>
                      <th scope="col">Tipo</th>
                      <th scope="col">Moeda</th>
                      <th scope="col">Valor</th>
                      <th scope="col">Data</th>
                      <th scope="col">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* TODO realizar listagem de compras feitas */}
                    <tr>
                      <td scope="row">{typeBuy}</td>
                      <td scope="row">Bitcoin</td>
                      <td>{"R$" + valor1.toFixed(2)}</td>
                      <td>19/11/2022</td>
                      <td>
                        <a href="">Detalhes</a>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">{typeBuy}</td>
                      <td scope="row">Bitcoin</td>
                      <td>{"R$" + valor2.toFixed(2)}</td>
                      <td>19/11/2022</td>
                      <td>
                        <a href="">Detalhes</a>
                      </td>
                    </tr>
                    <tr>
                      <td scope="row">{typeSell}</td>
                      <td scope="row">Bitcoin</td>
                      <td>{"R$" + valor3.toFixed(2)}</td>
                      <td>19/11/2022</td>
                      <td>
                        <a href="">Detalhes</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default Cadastro;
