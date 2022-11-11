import React from 'react'
import './Precos.css'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <React.Fragment>
            <section className="container">
                <div className='row '>
                    <div className="col-4">
                        <ul className="price">
                            <li className="col-header">XRP</li>
                            <li className="grey">R$ 9,99 no momento</li>
                            <li>12 consultation sessions</li>
                            <li>Unlimited Consultation</li>
                            <li>Unlimited Consultation</li>
                            <li><button className="button"><a className='text-decoration-none text-light' href="/Login">Comprar</a></button></li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <ul className="price">
                            <li className="col-header" style={{ backgroundColor: '#3773e0' }}>ETH</li>
                            <li className="grey">R$ 24,99 no momento</li>
                            <li>Unlimited Consultation</li>
                            <li>Unlimited Consultation</li>
                            <li>Unlimited Consultation</li>
                            <li><button className="button"><a className='text-decoration-none text-light' href="/Login">Comprar</a></button></li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <ul className="price">
                            <li className="col-header">BTC</li>
                            <li className="grey">R$ 49,99 no momento</li>
                            <li>Unlimited Consultation</li>
                            <li>Unlimited Consultation</li>
                            <li>Unlimited Consultation</li>
                            <li><button className="button"><a className='text-decoration-none text-light' href="/Login">Comprar</a></button></li>
                        </ul>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Home;