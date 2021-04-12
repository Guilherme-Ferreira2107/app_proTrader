import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

// Styles
import { Wrapper, FormCalculation, Btn } from "./styles.js";
import { Cor } from "../../../assets/cores.js";

// FormHooks
import { useForm } from "react-hook-form";

// Material UI
import { Grid } from "@material-ui/core";

// Services
import {
  atualizarDadosLocais,
  recuperarDadosLocais,
} from "../../../services/authService.js";

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
  const [valueCurrent, setValueCurrent] = useState(0);
  const [inputInvestimento, setInputInvestimento] = useState("");
  const [inputPayout, setInputPayout] = useState("");
  const [resultado, setResultado] = useState("");
  const [typeCalculator, setTypeCalculator] = useState("fixo");
  const [qtdaSoros, setQtdaSoros] = useState(1);

  useEffect(() => {
    console.log(dadosUsuario[0]);
  }, [dadosUsuario]);

  // Manipuladores
  const inputChangeInvestimento = (event) => {
    setInputInvestimento(event.target.value);
  };

  const inputChangePayout = (event) => {
    setInputPayout(event.target.value);
  };

  // Processar Cálculo
  const handlerSend = (data) => {
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
      let dados = recuperarDadosLocais();
      setDadosUsuario(dados);
      setValueCurrent(dados[0].saldoAtual);
    } catch (error) {
      history.push("/login");
    } finally {
      setLoading(false);
    }
  }, [history]);

  useEffect(() => {
    recuperarDados();
  }, [recuperarDados]);

  // Formatar números
  const formatNumber = (value) => {
    const conversao = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2,
    });
    return conversao ? conversao : "0,00";
  };

  // Registrar resultado
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
          message={`Valor copiado! ${text}`}
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

  // Registrar vitória
  const success = () => {
    if (resultado) {
      let retorno = parseFloat(valueCurrent) + parseFloat(resultado);
      let dados = recuperarDadosLocais();
      dados[0].saldoAtual = retorno.toFixed(2);
      try {
        setLoading(true);
        atualizarDadosLocais(dados);
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
    }
  };

  // Registrar perda
  const loss = () => {
    if (resultado) {
      let retorno = parseFloat(valueCurrent) - parseFloat(resultado);
      let dados = recuperarDadosLocais();
      dados[0].saldoAtual = retorno.toFixed(2);
      try {
        setLoading(true);
        atualizarDadosLocais(dados);
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
    }
  };

  //  Remover alerta
  const removeAlert = () => {
    setShowAlert(false);
  };

  //  Listagem de odem
  const listaResultadoOrdem = () => {
    let ordem = inputInvestimento
      ? formatNumber(Number(inputInvestimento))
      : "R$ 0,00";
    let retorno = resultado ? formatNumber(resultado) : "R$ 0,00";
    return (
      <Grid container spacing={2} className="resultado">
        <Grid item xs={12} md={6}>
          <Label size="14px" weight="bold">
            Ordem: {ordem}
          </Label>
          <Label size="18px">Resultado: {retorno}</Label>
        </Grid>
        <Grid item xs={4} md={2}>
          <Btn className="copy btn btn-info" onClick={() => copy(retorno)}>
            Copiar
          </Btn>
        </Grid>
        <Grid item xs={4} md={2}>
          <Btn
            className="copy btn btn-success"
            onClick={() => success(retorno)}
          >
            Vitória
          </Btn>
        </Grid>
        <Grid item xs={4} md={2}>
          <Btn className="copy btn btn-danger" onClick={() => loss(ordem)}>
            Derrota
          </Btn>
        </Grid>
      </Grid>
    );
  };

  //  Listagem de soros
  const listagemResultadosSoros = () => {
    let ordem = inputInvestimento;
    let retorno = resultado;
    let listaDeResultado = [];

    // montar lista
    for (let i = 0; i < qtdaSoros; i++) {
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

  //  Alterar cor de lucro diário
  const checkStyleColor = (value) => {
    if (value > 0) return Cor.Green;
    if (value < 0) return Cor.Red;
  };

  //  Controlar quantidade de ordens
  const qtdaOptions = () => {
    let listagem = [];
    if (typeCalculator === "soros")
      listagem.push(
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
        { value: 5, label: 5 }
      );
    else
      listagem.push(
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 }
      );

    return listagem;
  };

  return (
    <Wrapper>
      <Grid container justify="flex-end" className="infoSaldo">
        <Grid container item xs={12} md={3}>
          {/* Saldo e Lucro */}
          <Grid item xs={6} md={6}>
            <Label weight="bold">Saldo disponível: </Label>
            <Label size="20px" color={Cor.Blue}>
              {formatNumber(Number(valueCurrent))}
            </Label>
          </Grid>
          <Grid item xs={6} md={6}>
            <Label weight="bold">Lucro diário: </Label>
            <Label
              size="20px"
              color={checkStyleColor(dadosUsuario[0]?.lucroDia)}
            >
              {formatNumber(Number(dadosUsuario[0]?.lucroDia))}
            </Label>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="container card calculos">
        <Grid container spacing={4}>
          {/* Calculadora */}
          <Grid container item xs={12} md={6}>
            <FormCalculation onSubmit={handleSubmit(handlerSend)}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Select
                    for="typeCalculator"
                    label="Tipo de ordem"
                    labelColor={Cor.White}
                    name="typeCalculator"
                    id="typeCalculator"
                    ref={register({
                      required: "Tipo de cálculo é obrigatório!",
                    })}
                    onChange={(e) => setTypeCalculator(e.target.value)}
                    options={[
                      { value: "fixo", label: "Fixo" },
                      { value: "soros", label: "Soros" },
                      { value: "martingale", label: "Martingale" },
                    ]}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Select
                    for="qtdaNiveis"
                    label="Quantidade de ordens"
                    labelColor={Cor.White}
                    name="qtdaNiveis"
                    id="qtdaNiveis"
                    ref={register({
                      required: "Níveis de cálculo é obrigatório!",
                    })}
                    onChange={(e) => setQtdaSoros(e.target.value)}
                    options={qtdaOptions()}
                    disabled={typeCalculator === "fixo"}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
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
          <Grid container item xs={12} md={6} alignContent="flex-start">
            {listaResultadoOrdem()}
            {typeCalculator !== "fixo" && listagemResultadosSoros()}
          </Grid>
        </Grid>
      </Grid>
      {showAlert && alert}
    </Wrapper>
  );
};
export default Calcs;
