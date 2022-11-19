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
          <h1>Historico de Compra/Venda:</h1>
            <table class="table mt-5 mb-5">
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
                    <tr>
                    <td scope="row">Compra</td>
                    <td scope="row">Bitcoin</td>
                    <td>R$2.500,00</td>
                    <td>19/11/2022</td>
                    <td><a href="">Detalhes</a></td>
                    </tr>
                    <tr>
                    <td scope="row">Venda</td>
                    <td scope="row">Etherium</td>
                    <td>R$500,00</td>
                    <td>08/11/2022</td>
                    <td><a href="">Detalhes</a></td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </section>
      <br/><br/><br/><br/><br/>
      <Footer />
    </React.Fragment>
  );
};
export default Lista;