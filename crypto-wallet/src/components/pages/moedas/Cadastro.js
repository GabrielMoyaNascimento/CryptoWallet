import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const Cadastro = () => {
  const [moeda, setMoeda] = useState({
    nome: "",
    alias: "",
    valor: 0.0,
    ativo: false,
    dataCadastro: new Date(),
  });

  const [moedas, setMoedas] = useState([]);
  const [atualizar, setAtualizar] = useState({});

  let checkbox = document.getElementById("topping");

  useEffect(() => {
    //o que será executado
    axios.get("http://localhost:8080/api/moeda").then((result) => {
      //console.log(result);
      setMoedas(result.data);
    });
  }, [atualizar /**variáveis de alteração */]);

  function handleChange(event) {
    setMoeda({ ...moeda, [event.target.name]: event.target.value });
  }

  function handleSubmit() {
    axios.post("http://localhost:8080/api/moeda", moeda).then((result) => {
      setAtualizar(result.data.console);
      //atualizar a nossa tabela
    });
  }

  function check() {
    if (checkbox.checked) {
      moeda.ativo = true;
    }
  }

   function excluir(id) {
     axios.delete("http://localhost:8080/api/moeda/" + id).then((_result) => {
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
                <h1>Cadastro de Moeda:</h1>
                <fieldset>
                  <p>Nome:</p>
                  <input
                    className="form-control"
                    placeholder="Insira o nome da moeda"
                    type="text"
                    tabIndex="1"
                    required
                    autoFocus
                    name="nome"
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="mt-2">
                  <p>Valor:</p>
                  <input
                    mask="0,00"
                    className="form-control"
                    placeholder="Insira o valor da moeda"
                    type="text"
                    tabIndex="1"
                    required
                    autoFocus
                    name="valor"
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className="mt-2">
                  <p>Alias:</p>
                  <input
                    className="form-control"
                    placeholder="Insira o alias da moeda"
                    type="text"
                    tabIndex="1"
                    required
                    autoFocus
                    name="alias"
                    onChange={handleChange}
                  />
                </fieldset>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="topping"
                  name="ativo"
                  onClick={() => check()}
                />
                Ativa
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
              <div className="row">
                <div className="col">
                  <h1>Lista de Moedas:</h1>
                  <table className="table mt-5 mb-5">
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
                      {moedas.map((moeda) => (
                        <tr key={moeda.id}>
                          <td scope="row">{moeda.nome}</td>
                          <td>{moeda.valor.toFixed(2)}</td>
                          <td>{moeda.alias}</td>
                          <td>
                            {moeda.ativo ? (
                              <b className="text-primary">Sim</b>
                            ) : (
                              <b className="text-danger">Não</b>
                            )}
                          </td>                      
                          <td>
                            <button
                              onClick={() => excluir(moeda.id)}
                              className="btn btn-danger"
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p>{moedas.resultado}</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default Cadastro;
