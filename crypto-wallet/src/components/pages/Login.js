import React from 'react';
import MenuBar from '../navigations/MenuBar';
import Footer from '../navigations/Footer';

const Login = () => {
    return (
        <React.Fragment>
            <MenuBar />
            <div style={{ padding: "10%" }} className="col">
                <div style={{ padding: "0 25% 0 25%" }} className='row'>
                    <div className="col-6 px-5" >
                        <h1>Cadastre-se:</h1>
                        <p>Nome:</p>
                        <input className='form-control' placeholder="Escreva seu nome" type="text" tabIndex="1" required autoFocus />
                        <p>E-mail:</p>
                        <input className='form-control' placeholder="Endereço de e-mail" type="email" tabIndex="2" required />
                        <p>Telefone:</p>
                        <input className='form-control' placeholder="Número de telefone " type="tel" tabIndex="3" required />
                        <p>CPF:</p>
                        <input className='form-control' placeholder="000.000.000-00" type="text" tabIndex="4" required autoFocus />
                        <p>Senha:</p>
                        <input className='form-control' placeholder="Senha" type="text" tabIndex="5" required />
                        <br></br>
                        <button className='btn btn-primary form-control' name="submit" type="submit" id="contact-submit" data-submit="...Sending">Cadastrar</button>
                    </div>
                    <div className='col-6 px-5'>
                        <h1 id="text-login">Login:</h1>
                        <p id="text-forms">E-mail:</p>
                        <input className='form-control' placeholder="Endereço de e-mail" type="text" tabIndex="1" required autoFocus />
                        <p id="text-forms">Senha:</p>
                        <input className='form-control' placeholder="Senha" type="email" tabIndex="2" required />
                        <br></br>
                        <button className='btn btn-primary form-control' name="submit" type="submit" id="contact-submit" data-submit="...Sending">Login</button>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Login;