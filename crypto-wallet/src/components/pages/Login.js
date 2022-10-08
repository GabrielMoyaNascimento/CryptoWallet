import React from 'react';
import MenuBar from '../navigations/MenuBar';
import Footer from '../navigations/Footer';

const Login = () => {
    return (
        <React.Fragment>
            <MenuBar />
            <br /><br /><br /><br />
            <div className="registro">
                <form id="register" action="">
                    <h1>Cadastre-se:</h1>
                    <p>Nome:</p>
                    <div className='col-sm-6'>
                        <input className='text' placeholder="Escreva seu nome" type="text" tabIndex="1" required autoFocus />
                    </div>

                    <p>E-mail:</p>
                    <input placeholder="Endereço de e-mail" type="email" tabIndex="2" required />


                    <p>Telefone:</p>
                    <input placeholder="Número de telefone " type="tel" tabIndex="3" required />

                    <div className='col-sm-3'>

                        <p>CPF:</p>
                        <input placeholder="000.000.000-00" type="text" tabIndex="4" required autoFocus />


                        <p>Senha:</p>
                        <input placeholder="Senha" type="text" tabIndex="5" required />


                        <br></br>
                        <button className='btn btn-primary' name="submit" type="submit" id="contact-submit" data-submit="...Sending">Cadastrar</button>

                    </div>
                </form>
            </div>

            <form className="login" action="">
                <div className='row'>
                    <div className='col'>
                        <h1 id="text-login">Login:</h1>

                        <p id="text-forms">E-mail:</p>
                        <input placeholder="Endereço de e-mail" type="text" tabIndex="1" required autoFocus />


                        <p id="text-forms">Senha:</p>
                        <input placeholder="Senha" type="email" tabIndex="2" required />


                        <br></br>
                        <button className='btn btn-primary' name="submit" type="submit" id="contact-submit" data-submit="...Sending">Login</button>
                    </div>
                </div>
            </form>
            <br/>
            <Footer />
        </React.Fragment>
    )
}

export default Login;