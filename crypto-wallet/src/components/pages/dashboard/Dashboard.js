import React from "react";
import MenuBarLogged from "../../navigations/MenuBarLogged";
import Footer from "../../navigations/Footer";
import Container from "@material-ui/core/Container";
import Charts from "./chart/Chart";

const Dashboard = () => {
  return (
    <React.Fragment>
      <MenuBarLogged />
      <Container>
        <div style={{ margin: "78px" }}>
          <section className="container">
            <div className="row ">
              <div className="col">
                <Charts />
              </div>
            </div>
          </section>
        </div>
        <section className="container">
          <div className="row " style={{ margin: "78px" }}>
            <div className="col-4">
              <ul className="price">
                <li className="col-header">XRP</li>
                <li className="grey">R$ 9,99 no momento</li>
                <li className="grey">R$ 9,92 há 1 minuto</li>
                <li className="grey">R$ 9,90 há 5 minutos</li>
                <div className="row">
                  <div className="col">
                    <li>
                    <a
                          className="text-decoration-none text-light"
                          href="/compraVenda/ComprarVender"
                        >
                      <button className="button">
                          Comprar
                      </button>
                      </a>
                    </li>
                  </div>
                  <div className="col">
                    <li>
                    <a
                          className="text-decoration-none text-light"
                          href="/compraVenda/ComprarVender"
                        >
                      <button
                        className="button"
                        style={{ backgroundColor: "#e61919" }}
                      >
                          Vender
                        
                      </button>
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>

            <div className="col-4">
              <ul className="price">
                <li className="col-header">ETH</li>
                <li className="grey">R$ 24,99 no momento</li>
                <li className="grey">R$ 24,90 há 1 minuto</li>
                <li className="grey">R$ 24,88 há 5 minutos</li>
                <div className="row">
                  <div className="col">
                  <li>
                    <a
                          className="text-decoration-none text-light"
                          href="/compraVenda/ComprarVender"
                        >
                      <button className="button">
                          Comprar
                      </button>
                      </a>
                    </li>
                  </div>
                  <div className="col">
                    <li>
                    <a
                          className="text-decoration-none text-light"
                          href="/compraVenda/ComprarVender"
                        >
                      <button
                        className="button"
                        style={{ backgroundColor: "#e61919" }}
                      >
                          Vender
                        
                      </button>
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>

            <div className="col-4">
              <ul className="price">
                <li className="col-header">BTC</li>
                <li className="grey">R$ 49,99 no momento</li>
                <li className="grey">R$ 49,25 há 1 minuto</li>
                <li className="grey">R$ 49,20 há 5 minutos</li>
                <div className="row">
                  <div className="col">
                  <li>
                    <a
                          className="text-decoration-none text-light"
                          href="/compraVenda/ComprarVender"
                        >
                      <button className="button">
                          Comprar
                      </button>
                      </a>
                    </li>
                  </div>
                  <div className="col">
                    <li>
                    <a
                          className="text-decoration-none text-light"
                          href="/compraVenda/ComprarVender"
                        >
                      <button
                        className="button"
                        style={{ backgroundColor: "#e61919" }}
                      >
                          Vender
                        
                      </button>
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default Dashboard;
