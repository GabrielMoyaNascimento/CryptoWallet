import React from 'react'
import Layout from '../../../layout/moedas/Layout';
import SideBar from '../navigations/SideBar';

const Cadastro = () => {
    return (
        <React.Fragment>
            <SideBar/>
            <section className="content-container">
                <div className="block">
                    <div className="row">
                        <div className="col-left">
                            <form id="register" action="">
                                <h1>Cadastre-se:</h1>
                                <fieldset>
                                    <p id="text-cadastro">Nome:</p>
                                    <input placeholder="Escreva seu nome" type="text" tabIndex="1" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <p id="text-cadastro">E-mail:</p>
                                    <input placeholder="Endereço de e-mail" type="email" tabIndex="2" required />
                                </fieldset>
                                <fieldset>
                                    <p id="text-cadastro">Telefone:</p>
                                    <input placeholder="Número de telefone " type="tel" tabIndex="3" required />
                                </fieldset>
                                <fieldset>
                                    <p id="text-cadastro">CPF:</p>
                                    <input placeholder="000.000.000-00" type="text" tabIndex="4" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <p id="text-cadastro">Senha:</p>
                                    <input placeholder="Senha" type="text" tabIndex="5" required />
                                </fieldset>
                                <fieldset>
                                    <br></br>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Cadastrar</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-right">
                            <form id="login" action="">
                                <h1 id="text-login">Login:</h1>
                                <fieldset>
                                    <p id="text-forms">E-mail:</p>
                                    <input placeholder="Endereço de e-mail" type="text" tabIndex="1" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <p id="text-forms">Senha:</p>
                                    <input placeholder="Senha" type="email" tabIndex="2" required />
                                </fieldset>
                                <fieldset>
                                    <br></br>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Cadastro;