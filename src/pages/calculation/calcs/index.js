import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

// Styles
import { Wrapper, Title, FormCalculation, Btn } from "./styles.js";
import { Cor } from "../../../assets/cores.js";

// FormHooks
import { useForm } from "react-hook-form";

// Material UI
import { Grid } from "@material-ui/core";

// Componentes
import Input from "../../../components/input";
import Loading from "../../../components/loading";
import Submit from "../../../components/submit";
import Label from "../../../components/label";
import Alert from "../../../components/alert";
import Select from "../../../components/select";

const Calcs = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(<div />);
  const [dadosUsuario, setDadosUsuario] = useState([]);
  const [profitDaily, setProfitDaily] = useState(152.46);
  const [valueCurrent, setValueCurrent] = useState(0);
  const [inputRetorno, setInputRetorno] = useState("");
  const [inputInvestimento, setInputInvestimento] = useState("");
  const [inputPayout, setInputPayout] = useState("");
  const [resultado, setResultado] = useState("");
  const [addValor, setAddValor] = useState("");

  useEffect(() => {
    console.log(
      dadosUsuario,
      profitDaily,
      setProfitDaily,
      setValueCurrent,
      inputRetorno,
      setInputRetorno,
      addValor
    );
  }, [
    dadosUsuario,
    profitDaily,
    setProfitDaily,
    setValueCurrent,
    inputRetorno,
    setInputRetorno,
    addValor,
  ]);

  const inputChangeInvestimento = (event) => {
    setInputInvestimento(event.target.value);
  };

  const inputChangePayout = (event) => {
    setInputPayout(event.target.value);
  };

  const handlerSend = (data) => {
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      let resultado = data.investimento * (data.payout / 100);
      setResultado(resultado);
      setLoading(false);
    }, 500);
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
    return conversao ? conversao : "0,00";
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
          message={`Valor copiado! R$ ${text.toFixed(2)}`}
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

  const success = (event) => {
    console.log(event);
    if (resultado) {
      let retorno = parseFloat(valueCurrent) + parseFloat(resultado);
      let dados = JSON.parse(localStorage.getItem("@wallet-app/dadosUsuario"));
      dados[0].saldoInicial = retorno;
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
    console.log(event);
    if (resultado) {
      let retorno = parseFloat(valueCurrent) - parseFloat(resultado);
      let dados = JSON.parse(localStorage.getItem("@wallet-app/dadosUsuario"));
      dados[0].saldoInicial = retorno;
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

  const removeAlert = () => {
    setShowAlert(false);
  };

  const listaResultadoOrdem = () => {
    let ordem = inputInvestimento;
    let retorno = resultado;
    return (
      <Grid container spacing={2} className="resultado">
        <Grid item xs={6}>
          <Label size="14px" weight="bold">
            Ordem: R$ {ordem}
          </Label>
          <Label size="18px">Resultado: R$ {retorno}</Label>
        </Grid>
        <Grid item xs={2}>
          <Btn className="copy btn btn-info" onClick={() => copy(retorno)}>
            Copiar
          </Btn>
        </Grid>
        <Grid item xs={2}>
          <Btn
            className="copy btn btn-success"
            onClick={() => success(retorno)}
          >
            Vitória
          </Btn>
        </Grid>
        <Grid item xs={2}>
          <Btn className="copy btn btn-danger" onClick={() => loss(ordem)}>
            Derrota
          </Btn>
        </Grid>
      </Grid>
    );
  };

  const listagemResultadosSoros = () => {
    let ordem = inputInvestimento;
    let retorno = resultado;
    let qtda = 3;
    let listaDeResultado = [];
    let typeCalculator = "Soros";

    // montar lista
    for (let i = 0; i < qtda; i++) {
      listaDeResultado.push(
        <Grid container spacing={2} className="resultado">
          <Grid item xs={6}>
            <Label size="14px" weight="bold">
              {typeCalculator} {i}: R$ {ordem}
            </Label>
            <Label size="18px">Resultado: R$ {retorno}</Label>
          </Grid>
          <Grid item xs={2}>
            <Btn className="copy btn btn-info" onClick={() => copy(retorno)}>
              Copiar
            </Btn>
          </Grid>
          <Grid item xs={2}>
            <Btn
              className="copy btn btn-success"
              onClick={() => success(retorno)}
            >
              Vitória
            </Btn>
          </Grid>
          <Grid item xs={2}>
            <Btn className="copy btn btn-danger" onClick={() => loss(ordem)}>
              Derrota
            </Btn>
          </Grid>
        </Grid>
      );
    }

    // listar resultados
    return listaDeResultado && listaDeResultado.map((item) => item);
  };

  return (
    <Wrapper>
      <Grid container className="container card calculos">
        <Grid container justify="space-between">
          <Grid item xs={9}>
            <Title>Calculadora</Title>
          </Grid>
          <Grid container item xs={3}>
            <Grid item xs={6}>
              <Label weight="bold">Saldo disponível: </Label>
              <Label size="20px">{formatNumber(Number(valueCurrent))}</Label>
            </Grid>
            <Grid item xs={6}>
              <Label weight="bold">Lucro diário: </Label>
              <Label size="20px">{formatNumber(Number(valueCurrent))}</Label>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {/* Calculadora */}
          <Grid container item xs={6}>
            <FormCalculation onSubmit={handleSubmit(handlerSend)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Select
                    for="typeCalculator"
                    label="Tipo de ordem"
                    name="typeCalculator"
                    id="typeCalculator"
                    ref={register({
                      required: "Tipo de cálculo é obrigatório!",
                    })}
                    options={[
                      { value: "fixo", label: "Fixo" },
                      { value: "soros", label: "Soros" },
                      { value: "martingale", label: "Martingale" },
                    ]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    label="Ordem (R$)"
                    labelColor={Cor.White}
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
                    labelColor={Cor.White}
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
                  <Loading loading={loading} color={Cor.Yellow}>
                    <Submit type="submit" name="Calcular" value="Calcular" />
                  </Loading>
                </Grid>
              </Grid>
            </FormCalculation>
          </Grid>

          {/* Listagem de resultados */}
          <Grid container item xs={6}>
            {listaResultadoOrdem()}
            {listagemResultadosSoros()}
          </Grid>
        </Grid>
      </Grid>
      {showAlert && alert}
    </Wrapper>
  );
};
export default Calcs;
