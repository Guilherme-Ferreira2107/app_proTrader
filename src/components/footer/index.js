import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="col-sm-4">
          <h3>Serviços</h3>
          <a
            href="https://www.mql5.com/pt/market/product/43395"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Indicador Quebra Broker</p>
          </a>
        </div>
        <div className="col-sm-4">
          <h3>Ferramentas</h3>
          <a
            href="https://br.investing.com/economic-calendar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Calendário Econômico</p>
          </a>
          <a
            href="https://tradertimerzone.com.br/web/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Trader Timer Zone</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
