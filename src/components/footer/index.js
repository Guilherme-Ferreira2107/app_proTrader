import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="col-sm-4">
          <h3>Serviços</h3>
          <a
            href="https://www.mql5.com/pt/market/product/45395"
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
        <div className="col-sm-4">
          <h3>Redes Sociais</h3>
          <a
            href="https://www.instagram.com/protraderinvesting/?igshid=7hwm7kuhm6ms"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Pro Trader Investing</p>
          </a>
          <a
            href="https://www.youtube.com/channel/UCCyhV1o3OnLfGIa1jWaZahg"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Quebra Broker</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
