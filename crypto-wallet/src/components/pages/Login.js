import React from 'react'

const Login = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea"> 
                    <h2>Contact Us</h2>
                </div>
                <div className="block">
                    <div className="row">
                        <div className="col-left">
                            <form id="register" action="">
                                <h1>Cadastre-se:</h1>
                                <fieldset>
                                    <input placeholder="Your Name" type="text" tabIndex="1" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Subject" type="text" tabIndex="2" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address" type="email" tabIndex="3" required />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Phone Number" type="tel" tabIndex="4" required />
                                </fieldset>
                                <fieldset>
                                    <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Cadastrar</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-right">
                        <form id="login" action="">
                                <h1 id="text-login">Login:</h1>
                                <fieldset>
                                    <input placeholder="Your Name" type="text" tabIndex="1" required autoFocus />
                                </fieldset>
                                <fieldset>
                                    <input placeholder="Your Email Address" type="email" tabIndex="3" required />
                                </fieldset>
                                <fieldset>
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

export default Login;