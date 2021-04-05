import React from "react";
import "./styles.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { useSelector } from "react-redux";

const Main = (props) => {
  const valueCurrent = useSelector((state) => state.valueCurrent);
  const valueInitial = useSelector((state) => state.valueInitial);
  const newName = useSelector((state) => state.newName);
  const profitDaily = useSelector((state) => state.profitDaily);
  const profitWeekly = useSelector((state) => state.profitWeekly);
  const profitMonthly = useSelector((state) => state.profitMonthly);

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <h4>
            Olá <em>{newName}</em>, seja bem vindo ao seu Trading System!
          </h4>
        </div>
        <div className="container exhibit">
          <div className="col-sm-4">
            <h2>Saldo disponível: </h2>
            <h2>R$ {valueCurrent}</h2>
          </div>
          <div className="col-sm-8">
            <div className="col-sm-4">
              <label>Saldo Inicial</label>
              <h4>R${valueInitial} </h4>
            </div>
            <div className="col-sm-8">
              <label>Lucro Total</label>
              <h4>R${null} </h4>
            </div>
            <div className="col-sm-4">
              <label>Lucro Diário</label>
              <h4>R${profitDaily} </h4>
            </div>
            <div className="col-sm-4">
              <label>Lucro Semanal</label>
              <h4>R${profitWeekly} </h4>
            </div>
            <div className="col-sm-4">
              <label>Lucro Mensal</label>
              <h4>R${profitMonthly} </h4>
            </div>
          </div>
        </div>

        <div className="container update-wallet">
          <h4>Preencha os campos abaixo para atualizar sua carteira</h4>
          <br />
          <div className="container">
            <div className="container col-sm-6">
              <form className="form-inline">
                <div className="input-group">
                  <span class="input-group-addon">R$</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1.000,00"
                  />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-success">
                      Deposite
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="container col-sm-6">
              <form className="form-inline">
                <div className="input-group">
                  <span class="input-group-addon">R$</span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="1.000,00"
                  />
                  <div className="input-group-btn">
                    <button type="button" className="btn btn-danger">
                      Saque
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
