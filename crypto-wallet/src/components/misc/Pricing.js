import React from 'react'
import './Pricing.css'

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
            <div className="columns">
                <ul className="price">
                    <li className="col-header">XRP</li>
                    <li className="grey">R$ 9,99 no momento</li>
                    <li>12 consultation sessions</li>
                    <li>Unlimited Consultation</li>
                    <li>Unlimited Consultation</li>
                    <li className="grey"><button className="button">Login/Comprar</button></li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header" style={{backgroundColor:'#3773e0'}}>ETH</li>
                    <li className="grey">R$ 24,99 no momento</li>
                    <li>Unlimited Consultation</li>
                    <li>Unlimited Consultation</li>
                    <li>Unlimited Consultation</li>
                    <li className="grey"><button className="button">Login/Comprar</button></li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header">BTC</li>
                    <li className="grey">R$ 49,99 no momento</li>
                    <li>Unlimited Consultation</li>
                    <li>Unlimited Consultation</li>
                    <li>Unlimited Consultation</li>
                    <li className="grey"><button className="button">Login/Comprar</button></li>
                </ul>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Home;