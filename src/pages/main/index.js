import React, { useEffect, useState } from "react";
import firebase from "firebase";
import b64 from "base-64";
import _ from "lodash";

// FormHooks
import { useForm } from "react-hook-form";

// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import Loading from "../../components/loading";

// Redux
import { useSelector } from "react-redux";

// Style
import "./styles.css";
import { ModalInicial } from "./styles.js";

const Main = () => {
  const { register, handleSubmit } = useForm();
  const userMail = useSelector((state) => state.email);
  const [valueCurrent, setValueCurrent] = useState(0);
  const [valueInitial, setValueInitial] = useState(0);
  const [profitTotal, setProfitTotal] = useState("");
  const [profitDaily, setProfitDaily] = useState("");
  const [profitWeekly, setProfitWeekly] = useState("");
  const [profitMonthly, setProfitMonthly] = useState("");
  const [dadosUsuario, setDadosUsuario] = useState("");
  const [emailEncode, setEmailEncode] = useState("");
  const [loading, setLoading] = useState(false);
  const [addValor, setAddValor] = useState("");
  const [removeValor, setRemoveValor] = useState("");
  const [valorInicial, setValorInicial] = useState("");

  // Converter email para recuperar dados
  useEffect(() => {
    setEmailEncode(b64.encode(userMail));
  }, [userMail]);

  // Recuperar dados
  useEffect(() => {
    try {
      setLoading(true);
      firebase
        .database()
        .ref(`user/${emailEncode}`)
        .once("value")
        .then((snapshot) => {
          const lvl = _.values(snapshot.val());
          const resultado = _.values(lvl[0]);
          setDadosUsuario(resultado[0]);
          setValueInitial(resultado[0]?.saldoInicial);
          setValueCurrent(resultado[0]?.saldo);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [emailEncode]);

  // Distribuir valores
  useEffect(() => {
    if (valueCurrent && valueInitial)
      setProfitTotal(valueCurrent - valueInitial);

    setProfitDaily(0);
    setProfitWeekly(0);
    setProfitMonthly(0);
  }, [valueCurrent, valueInitial]);

  useEffect(() => {
    console.log(dadosUsuario);
  }, [dadosUsuario]);

  const addValorInicial = (data) => {
    console.log(+data?.valorInicial);
    setValorInicial("");
  };

  // Adicionar saldo
  const addSaldo = (event) => {
    event.preventDefault();
    console.log(+addValor);
    setAddValor("");
  };

  // Saque saldo
  const saqueSaldo = (event) => {
    event.preventDefault();
    console.log(-removeValor);
    setRemoveValor("");
  };

  return (
    <>
      <Header />
      {valueInitial === 0 ? (
        <ModalInicial>
          <h3>Para começar, inicie seu wallet com um valor inicial!</h3>
          <form onSubmit={handleSubmit(addValorInicial)}>
            <input
              className="inputValue"
              type="number"
              name="valorInicial"
              placeholder="R$100,00"
              required
              ref={register({
                required: "Senha é obrigatório!",
              })}
            />
            <input
              className="button btn btn-success"
              type="submit"
              value="Depositar e começar!"
            />
          </form>
        </ModalInicial>
      ) : null}
      <div className={valueInitial === 0 ? "main opacity" : "main"}>
        <div className="container">
          <h4>
            Olá <em>{dadosUsuario?.nome}</em>, seja bem vindo ao seu Trading
            System!
          </h4>
        </div>
        <Loading loading={loading}>
          <div className="container exhibit">
            <div className="col-sm-4">
              <h2>Saldo disponível: </h2>
              <h2>
                R${valueCurrent && valueCurrent.toFixed(2).replace(".", ",")}
              </h2>
            </div>
            <div className="col-sm-8">
              <div className="col-sm-4">
                <label>Saldo Inicial</label>
                <h4>
                  R${valueInitial && valueInitial.toFixed(2).replace(".", ",")}{" "}
                </h4>
              </div>
              <div className="col-sm-8">
                <label>Lucro Total</label>
                <h4>
                  R${profitTotal && profitTotal.toFixed(2).replace(".", ",")}{" "}
                </h4>
              </div>
              <div className="col-sm-4">
                <label>Lucro Diário</label>
                <h4>
                  R${profitDaily && profitDaily.toFixed(2).replace(".", ",")}{" "}
                </h4>
              </div>
              <div className="col-sm-4">
                <label>Lucro Semanal</label>
                <h4>
                  R${profitWeekly && profitWeekly.toFixed(2).replace(".", ",")}{" "}
                </h4>
              </div>
              <div className="col-sm-4">
                <label>Lucro Mensal</label>
                <h4>
                  R$
                  {profitMonthly &&
                    profitMonthly.toFixed(2).replace(".", ",")}{" "}
                </h4>
              </div>
            </div>
          </div>
        </Loading>
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
      </div>
      <Footer />
    </>
  );
};

export default Main;
