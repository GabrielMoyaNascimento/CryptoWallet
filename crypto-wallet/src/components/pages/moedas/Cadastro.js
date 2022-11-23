import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const Cadastro = () => {

  const [moeda, setMoeda] = useState({
    nome: "",
    alias: "",
    valor: 0.00,
    ativo: false,
    dataCadastro: new Date()
  });

  const [moedas, setMoedas] = useState([]);
  const [atualizar, setAtualizar] = useState({});

  let checkbox = document.getElementById('topping');

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

  return (
    <React.Fragment>
      <MenuBarLogged />

      <section className="content-container">
        <form>
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
              <a href="/moeda/Lista" style={{ color: 'white', textDecoration: 'none' }}>
                <button className="btn btn-secondary form-control mt-3 ">
                  Todas as moedas
                </button>
              </a>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </React.Fragment>
  );
};
export default Cadastro;
