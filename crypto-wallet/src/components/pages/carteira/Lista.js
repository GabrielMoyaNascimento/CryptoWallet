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
          <h1>Lista de Carteiras:</h1>
            <table class="table mt-5 mb-5">
                <thead>
                    <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Ativo</th>
                    <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Bitcoin</td>
                    <td>Sim</td>
                    <td><a href="">Acessar</a> <a href="">Editar</a></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Etherium</td>
                    <td>Nao</td>
                    <td><a href="">Acessar</a> <a href="">Editar</a></td>
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