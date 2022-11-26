import React, { useEffect, useState } from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import axios from "axios";

const Cadastro = () => {
  const [carteira, setCarteira] = useState({
    nome: "",
    ativo: false,
    dataCadastro: new Date(),
    usuario: 0,
  });

  const [carteiras, setCarteiras] = useState([]);
  const [atualizar, setAtualizar] = useState({});

  let checkbox = document.getElementById("topping");

  useEffect(() => {
    //o que será executado
    axios.get("http://localhost:8080/api/carteira").then((result) => {
      //console.log(result);
      setCarteiras(result.data);
    });
  }, [atualizar /**variáveis de alteração */]);

  function handleChange(event) {
    setCarteira({ ...carteira, [event.target.name]: event.target.value });
  }

  function handleSubmit() {
    axios
      .post("http://localhost:8080/api/carteira", carteira)
      .then((result) => {
        setAtualizar(result.data.console);
        //atualizar a nossa tabela
      });
  }

  function check() {
    if (checkbox.checked) {
      carteira.ativo = true;
    }
  }

   function excluir(id) {
     axios.delete("http://localhost:8080/api/venda/" + id).then((_result) => {
       setAtualizar(id);
     });
   }

  return (
    <React.Fragment>
      <MenuBarLogged />

      <section className="content-container">
        <form onSubmit={handleSubmit}>
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
                    name="nome"
                    tabIndex="1"
                    required
                    value={carteira.nome}
                    autoFocus
                    onChange={handleChange}
                  />
                </fieldset>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="topping"
                  name="ativo"
                  value={carteira.ativo}
                  onClick={() => check()}
                />
                Ativo
                <button
                  className="btn btn-primary form-control mt-5 mb-5 "
                  name="submit"
                  type="submit"
                  id="contact-submit"
                  data-submit="...Sending"
                  onClick={() => handleSubmit()}
                >
                  Cadastrar
                </button>
              </form>
              <hr />
              <h1>Lista de Carteiras:</h1>
              <table className="table mt-5 mb-5">
                <thead>
                  <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Ativo</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {carteiras.map((carteira) => (
                    <tr>
                      <th scope="row">{carteira.id}</th>
                      <td>{carteira.nome}</td>
                      <td>
                        {carteira.ativo ? (
                          <b className="text-primary">Sim</b>
                        ) : (
                          <b className="text-danger">Não</b>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => excluir(carteira.id)}
                          className="btn btn-danger"
                        >
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </section>
      <br />
      <br />

      <Footer />
    </React.Fragment>
  );
};
export default Cadastro;
