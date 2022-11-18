import React from "react";
import "./Precos.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <section className="container">
        <div className="row " style={{ margin: "78px" }}>
          <div className="col-4">
            <ul className="price">
              <li className="col-header">XRP</li>
              <li className="grey">R$ 9,99 no momento</li>
              <li className="grey">R$ 9,92 há 1 minuto</li>
              <li className="grey">R$ 9,90 há 5 minutos</li>
              <li>
                <button className="button">
                  <a className="text-decoration-none text-light" href="/Login">
                    Comprar
                  </a>
                </button>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <ul className="price">
              <li className="col-header" style={{ backgroundColor: "#3773e0" }}>
                ETH
              </li>
              <li className="grey">R$ 24,99 no momento</li>
              <li className="grey">R$ 24,90 há 1 minuto</li>
              <li className="grey">R$ 24,88 há 5 minutos</li>
              <li>
                <button className="button">
                  <a className="text-decoration-none text-light" href="/Login">
                    Comprar
                  </a>
                </button>
              </li>
            </ul>
          </div>

          <div className="col-4">
            <ul className="price">
              <li className="col-header">BTC</li>
              <li className="grey">R$ 49,99 no momento</li>
              <li className="grey">R$ 49,25 há 1 minuto</li>
              <li className="grey">R$ 49,20 há 5 minutos</li>
              <li>
                <button className="button">
                  <a className="text-decoration-none text-light" href="/Login">
                    Comprar
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
