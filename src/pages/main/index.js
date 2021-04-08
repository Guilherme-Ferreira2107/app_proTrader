import React, { useCallback, useEffect, useState } from "react";
import { mask } from "remask";
import { useHistory } from "react-router";

// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import Loading from "../../components/loading";
import Alert from "../../components/alert";

// Style
import "./styles.css";

const Main = () => {
  const history = useHistory();
  const [valueInitial, setValueInitial] = useState(0);
  const [valueCurrent, setValueCurrent] = useState(0);
  const [profitDaily, setProfitDaily] = useState(0);
  const [profitWeekly, setProfitWeekly] = useState(0);
  const [profitMonthly, setProfitMonthly] = useState(0);
  const [dadosUsuario, setDadosUsuario] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(<div />);
  const [loading, setLoading] = useState(false);
  const [addValor, setAddValor] = useState("");
  const [removeValor, setRemoveValor] = useState("");

  // Recuperar dados
  const recuperarDados = useCallback(async () => {
    try {
      setLoading(true);
      let dados = JSON.parse(localStorage.getItem("@wallet-app/dadosUsuario"));
      setDadosUsuario(dados[0]);
    } catch (error) {
      history.push("/login");
    } finally {
      setLoading(false);
    }
  }, [history]);

  useEffect(() => {
    recuperarDados();
  }, [recuperarDados]);

  useEffect(() => {
    setValueInitial(dadosUsuario?.saldoInicial);
  }, [dadosUsuario]);

  useEffect(() => {
    if (valueInitial > 0) {
      setValueCurrent(valueInitial);
    }
    valueInitial && recuperarDados();
  }, [recuperarDados, valueInitial]);

  // Adicionar saldo
  const addSaldo = (event) => {
    event.preventDefault();
    if (addValor) {
      let resultado = parseFloat(valueInitial) + parseFloat(addValor);
      let dados = JSON.parse(localStorage.getItem("@wallet-app/dadosUsuario"));
      dados[0].saldoInicial = resultado;
      try {
        setLoading(true);
        localStorage.setItem("@wallet-app/dadosUsuario", JSON.stringify(dados));
        recuperarDados();
        setShowAlert(true);
        setAlert(
          <Alert
            message="Depósito com sucesso!"
            value="Ok"
            onClick={removeAlert}
            type="sucesso"
          />
        );
      } catch (error) {
      } finally {
        setLoading(false);
      }
      setAddValor("");
    }
  };

  // Saque saldo
  const saqueSaldo = (event) => {
    event.preventDefault();
    if (removeValor) {
      if (removeValor <= parseFloat(valueInitial)) {
        let resultado = parseFloat(valueInitial) - parseFloat(removeValor);
        let dados = JSON.parse(
          localStorage.getItem("@wallet-app/dadosUsuario")
        );
        dados[0].saldoInicial = resultado;
        try {
          setLoading(true);
          localStorage.setItem(
            "@wallet-app/dadosUsuario",
            JSON.stringify(dados)
          );
          recuperarDados();
          setShowAlert(true);
          setAlert(
            <Alert
              message="Saque com sucesso!"
              value="Ok"
              onClick={removeAlert}
              type="sucesso"
            />
          );
        } catch (error) {
        } finally {
          setLoading(false);
        }
      } else {
        setShowAlert(true);
        setAlert(
          <Alert
            message="Saldo indisponível! Verifique seu saldo disponível"
            value="Ok"
            onClick={removeAlert}
            type="erro"
          />
        );
      }
      setRemoveValor("");
    }
  };

  // Formatar números
  const formatNumber = (value) => {
    const conversao = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2,
    });
    return conversao;
  };

  const removeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Header />
      <div className="main">
        <div className="container">
          <h4>
            Olá <em>{dadosUsuario?.nome}</em>, seja bem vindo ao seu Trading
            System!
          </h4>
        </div>

        <div className="container update-wallet">
          <div className="container">
            <div className="container col-sm-6">
              <form className="form-inline">
                <div className="input-group">
                  <span class="input-group-addon">R$</span>
                  <input
                    type="number"
                    name="adicionaValor"
                    className="form-control"
                    placeholder="1.000,00"
                    value={addValor}
                    onChange={(event) => setAddValor(event.target.value)}
                  />
                  <div className="input-group-btn">
                    <button onClick={addSaldo} className="btn btn-success">
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
                    placeholder="-1.000,00"
                    value={removeValor}
                    onChange={(event) => setRemoveValor(event.target.value)}
                  />
                  <div className="input-group-btn">
                    <button onClick={saqueSaldo} className="btn btn-danger">
                      Saque
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Loading loading={loading}>
          <div className="container exhibit">
            <div className="col-sm-12">
              <div className="col-sm-3">
                <label>Saldo disponível: </label>
                <h4>
                  {valueCurrent
                    ? formatNumber(Number(valueCurrent))
                    : "R$ 0,00"}
                </h4>
              </div>
              <div className="col-sm-3">
                <label>Lucro Diário</label>
                <h4>{profitDaily ? formatNumber(profitDaily) : "R$ 0,00"}</h4>
              </div>
              <div className="col-sm-3">
                <label>Lucro Semanal</label>
                <h4>{profitWeekly ? formatNumber(profitWeekly) : "R$ 0,00"}</h4>
              </div>
              <div className="col-sm-3">
                <label>Lucro Mensal</label>
                <h4>
                  {profitMonthly ? formatNumber(profitMonthly) : "R$ 0,00"}
                </h4>
              </div>
            </div>
          </div>
        </Loading>
      </div>
      <Footer />
      {showAlert && alert}
    </>
  );
};

export default Main;
