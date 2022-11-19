import React from "react";
import MenuBar from "../navigations/MenuBar";
import Footer from "../navigations/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

const Login = () => {

  const [usuario, setUsuario] = useState({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
    senha: "",
    ativo: true,
    dataCadastro: new Date()
  });

  const [usuarios, setUsuarios] = useState([]);
  const [atualizar, setAtualizar] = useState({});

  useEffect(() => {
    //o que será executado
    axios.get("http://localhost:8080/api/usuario").then((result) => {
      //console.log(result);
      setUsuarios(result.data);
    });
  }, [atualizar /**variáveis de alteração */]);

  function handleChange(event) {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {

    axios.post("http://localhost:8080/api/usuario", usuario).then((result) => {
      setAtualizar(result.data.console);
      //atualizar a nossa tabela
    });

  }

  return (
    <React.Fragment>
      <MenuBar />
      <div style={{ padding: "10%" }} className="col">
        <div style={{ padding: "0 25% 0 25%" }} className="row">
          <div className="col-6 px-5">
            <h1>Cadastre-se:</h1>
            <p>Nome:</p>
            <input
              name="nome"
              className="form-control"
              placeholder="Escreva seu nome"
              type="text"
              tabIndex="1"
              required
              autoFocus
              onChange={handleChange}
            />
            <p>E-mail:</p>
            <input
              name="email"
              className="form-control"
              placeholder="Endereço de e-mail"
              type="email"
              tabIndex="2"
              required
              onChange={handleChange}
            />
            <p>Telefone:</p>
            <input
              name="telefone"
              className="form-control"
              placeholder="Número de telefone "
              type="tel"
              tabIndex="3"
              required
              onChange={handleChange}
            />
            <p>CPF:</p>
            <input
              name="cpf"
              className="form-control"
              placeholder="000.000.000-00"
              type="text"
              tabIndex="4"
              required
              autoFocus
              onChange={handleChange}
            />
            <p>Senha:</p>
            <input
              name="senha"
              className="form-control"
              placeholder="Senha"
              type="text"
              tabIndex="5"
              required
              onChange={handleChange}
            />
            <input
              className="btn btn-primary form-control mt-3"
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              onClick={() => handleSubmit()}
              value="Cadastrar"
            />
            
          </div>
          <div className="col-6 px-5">
            <h1 id="text-login">Login:</h1>
            <p id="text-forms">E-mail:</p>
            <input
              className="form-control"
              placeholder="Endereço de e-mail"
              type="text"
              tabIndex="1"
              required
              autoFocus
            />
            <p id="text-forms">Senha:</p>
            <input
              className="form-control"
              placeholder="Senha"
              type="email"
              tabIndex="2"
              required
            />
            <button
              className="btn btn-primary form-control mt-3"
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              <a className="text-decoration-none text-light" href="/dashboard">
                Login
              </a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
