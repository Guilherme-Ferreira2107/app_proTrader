import React from "react";
import "./style.scss";

import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  const history = useHistory();
  const exitApp = () => {
    localStorage.removeItem("@wallet-app/dadosUsuario");
    history.push("/login");
  };
  const newEmail = "";
  return (
    <div className="header">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/main">
              <img src={Logo} alt="Logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>
                <a href="/main">Home</a>
              </li>
              <li>
                <a href="/calculations">Calculadora</a>
              </li>
              <li>
                <a href="/performances">Performance</a>
              </li>
              <li>
                <a href="/historic">Histórico</a>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#main">{newEmail}</a>
              </li>
              <li>
                <button className="btn-exit" onClick={exitApp}>
                  Sair <span className="glyphicon glyphicon-log-in"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
