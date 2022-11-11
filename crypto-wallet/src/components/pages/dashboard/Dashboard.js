import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import { Link } from "react-router-dom"
import Container from "@material-ui/core/Container";
import Charts from "./chart/Chart"

const Dashboard = () => {


    return (
        <React.Fragment>
            <MenuBarLogged />
            <Container >
                <section className="container">
                    <div className='row '>
                        <div className="col-4">
                            <ul className="price">
                                <li className="col-header">XRP</li>
                                <li className="grey">R$ 9,99 no momento</li>
                                <li>12 consultation sessions</li>
                                <li>Unlimited Consultation</li>
                                <li>Unlimited Consultation</li>
                                <div className="row">
                                    <div className="col">
                                        <li><button className="button"><a className='text-decoration-none text-light' href="/Dashboard">Comprar</a></button></li>
                                    </div>
                                    <div className="col">
                                        <li><button className="button"><a className='text-decoration-none text-light' href="/Dashboard">Vender</a></button></li>
                                    </div>
                                </div>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="price">
                                <li className="col-header" style={{ backgroundColor: '#3773e0' }}>ETH</li>
                                <li className="grey">R$ 24,99 no momento</li>
                                <li>Unlimited Consultation</li>
                                <li>Unlimited Consultation</li>
                                <li>Unlimited Consultation</li>
                                <div className="row">
                                    <div className="col">
                                        <li><button className="button"><a className='text-decoration-none text-light' href="/Dashboard">Comprar</a></button></li>
                                    </div>
                                    <div className="col">
                                        <li><button className="button"><a className='text-decoration-none text-light' href="/Dashboard">Vender</a></button></li>
                                    </div>
                                </div>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul className="price">
                                <li className="col-header">BTC</li>
                                <li className="grey">R$ 49,99 no momento</li>
                                <li>Unlimited Consultation</li>
                                <li>Unlimited Consultation</li>
                                <li>Unlimited Consultation</li>
                                <div className="row">
                                    <div className="col">
                                        <li><button className="button"><a className='text-decoration-none text-light' href="/Dashboard">Comprar</a></button></li>
                                    </div>
                                    <div className="col">
                                        <li><button className="button"><a className='text-decoration-none text-light' href="/Dashboard">Vender</a></button></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className='row '>
                        <div className="col">
                            <Charts />
                        </div>
                    </div>
                </section>
            </Container>
            <Footer />

        </React.Fragment>
    );
};
export default Dashboard;
