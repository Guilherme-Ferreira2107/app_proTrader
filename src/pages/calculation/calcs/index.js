import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";

// Styles
import { Wrapper, Title } from "./styles.js";

// FormHooks
import { useForm } from "react-hook-form";

//  Material UI
import { Grid } from "@material-ui/core";

// Componentes
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Submit from "../../../components/submit";
import Label from "../../../components/label";
import Alert from "../../../components/alert";

const Calcs = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(<div />);
  const [dadosUsuario, setDadosUsuario] = useState([]);
  const [valueInitial, setValueInitial] = useState(0);
  const [valueCurrent /* setValueCurrent */] = useState(0);
  const [profitDaily /* setProfitDaily */] = useState(152.46);
  const [inputInvestimento, setInputInvestimento] = useState("");
  const [inputPayout, setInputPayout] = useState("");
  const [resultado, setResultado] = useState("");
  const [addValor, setAddValor] = useState("");

  const inputChangeInvestimento = (event) => {
    setInputInvestimento(event.target.value);
  };

  const inputChangePayout = (event) => {
    setInputPayout(event.target.value);
  };

  const handlerSend = (data) => {
    setLoading(true);
    let resultado = data.investimento * (data.payout / 100);
    setResultado(resultado);
    setLoading(false);
  };

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

  // Formatar números
  const formatNumber = (value) => {
    const conversao = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2,
    });
    return conversao;
  };

  const copy = (text) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      setShowAlert(true);
      setAlert(
        <Alert
          message="Valor copiado!"
          value="Ok"
          onClick={removeAlert}
          type="sucesso"
        />
      );
      setTimeout(() => {
        removeAlert();
      }, 2000);
    } catch (err) {
      setAlert(
        <Alert
          message="Falha ao copiar!"
          value="Ok"
          onClick={removeAlert}
          type="error"
        />
      );
      setTimeout(() => {
        removeAlert();
      }, 2000);
    }
    document.body.removeChild(textArea);
  };

  const removeAlert = () => {
    setShowAlert(false);
  };

  const success = (event) => {
    event.preventDefault();
    if (resultado) {
      let resultado = parseFloat(valueInitial) + parseFloat(resultado);
      let dados = JSON.parse(localStorage.getItem("@wallet-app/dadosUsuario"));
      dados[0].saldoInicial = resultado;
      try {
        setLoading(true);
        localStorage.setItem("@wallet-app/dadosUsuario", JSON.stringify(dados));
        recuperarDados();
        setShowAlert(true);
        setAlert(
          <Alert
            message="Registrado com sucesso!"
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

  const loss = (event) => {
    event.preventDefault();
    if (resultado) {
      let resultado = parseFloat(valueInitial) - parseFloat(resultado);
      let dados = JSON.parse(localStorage.getItem("@wallet-app/dadosUsuario"));
      dados[0].saldoInicial = resultado;
      try {
        setLoading(true);
        localStorage.setItem("@wallet-app/dadosUsuario", JSON.stringify(dados));
        recuperarDados();
        setShowAlert(true);
        setAlert(
          <Alert
            message="Registrado com sucesso!"
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

  return (
    <Wrapper>
      <Title>Calculadora</Title>

      <Loading loading={loading}>
        <Grid container spacing={2} className="container card">
          <Grid item xs={6} className="card-border1">
            <label>Saldo disponível: </label>
            <h4>
              {valueCurrent ? formatNumber(Number(valueCurrent)) : "R$ 0,00"}
            </h4>
          </Grid>
          <Grid item xs={6} className="card-border2">
            <label>Lucro Diário</label>
            <h4>{profitDaily ? formatNumber(profitDaily) : "R$ 0,00"}</h4>
          </Grid>
        </Grid>
      </Loading>

      <Grid container className="container card calculos">
        <form onSubmit={handleSubmit(handlerSend)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Input
                label="Investimento (R$)"
                name="investimento"
                placeholder="R$ 100,00"
                type="number"
                value={inputInvestimento}
                ref={register({
                  required: "Investimento é obrigatório!",
                })}
                onChange={inputChangeInvestimento}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                label="Payout (%)"
                name="payout"
                placeholder="87%"
                type="number"
                value={inputPayout}
                ref={register({
                  required: "Payout é obrigatório!",
                })}
                onChange={inputChangePayout}
              />
            </Grid>
            <Grid item xs={12}>
              <Loading loading={loading}>
                <Submit type="submit" name="Calcular" value="Calcular" />
              </Loading>
            </Grid>
          </Grid>
          <Grid container className="resultado">
            <Label>
              RESULTADO: R$ {resultado ? resultado.toFixed(2) : "0,00"}
            </Label>
            <button
              className="copy btn btn-success"
              onClick={() => success(resultado)}
            >
              Vitória
            </button>
            <button
              className="copy btn btn-danger"
              onClick={() => loss(resultado)}
            >
              Derrota
            </button>
            <button
              className="copy btn btn-info"
              onClick={() => copy(resultado)}
            >
              Copiar
            </button>
          </Grid>
        </form>
      </Grid>
      {showAlert && alert}
    </Wrapper>
  );
};
export default Calcs;
