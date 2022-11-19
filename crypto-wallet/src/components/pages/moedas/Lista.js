import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";

const Lista = () => {
  return (
    <React.Fragment>
      <MenuBarLogged />
      <section className="content-container">
        <div style={{ padding: "10%" }} className="col">
          <div style={{ padding: "0 25% 0 25%" }} className="row">
          <h1>Lista de Moedas:</h1>
            <table class="table mt-5 mb-5">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Ativo</th>
                    <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td scope="row">Bitcoin</td>
                    <td>R$89.479,01</td>
                    <td>BTC</td>
                    <td>Sim</td>
                    <td><a href="">Editar</a></td>
                    </tr>
                    <tr>
                    <td scope="row">Ethereum</td>
                    <td>R$6.493,75</td>
                    <td>ETH</td>
                    <td>Sim</td>
                    <td><a href="">Editar</a></td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </section>
      <br/><br/><br/><br/><br/><br/>
      <Footer />
    </React.Fragment>
  );
};
export default Lista;