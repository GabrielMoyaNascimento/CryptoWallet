import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const Cadastro = () => {

  const [carteira, setCarteira] = useState({
    nome: "",
    ativo: false,
    dataCadastro: new Date()
  });

  const [carteiras, setCarteiras] = useState([]);
  const [atualizar, setAtualizar] = useState({});

  let checkbox = document.getElementById('topping');

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

    axios.post("http://localhost:8080/api/carteira", carteira).then((result) => {
      setAtualizar(result.data.console);
      //atualizar a nossa tabela
    });
  }

  function check() {
    if (checkbox.checked) {
      carteira.ativo = true;
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
                    autoFocus
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
              <a href="/carteira/Lista" style={{ color: 'white', textDecoration: 'none' }}>
                <button className="btn btn-secondary form-control mt-3 mt-5">
                  Minhas carteiras
                </button>
              </a>
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
