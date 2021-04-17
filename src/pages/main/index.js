import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import { useHistory } from "react-router";

// ApexChart
import ReactApexChart from "react-apexcharts";

// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import Alert from "../../components/alert";
import Label from "../../components/label";
import NoData from "../../components/noData";

// Material UI
import { Grid } from "@material-ui/core";

// Style
import "./styles.css";
import { CardHistorico, TitleHistorico, ValueHistorico } from "./styles";
import { Cor } from "../../assets/cores";

//Services
import {
  atualizarDadosLocais,
  recuperarDadosLocais
} from "../../services/authService";
import InputGroup from "../../components/inputGroup";

const Main = () => {
  const history = useHistory();
  const [valueCurrent, setValueCurrent] = useState(0);
  const [dadosUsuario, setDadosUsuario] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(<div />);
  const [depositaValor, setDepositaValor] = useState("");
  const [saque, setSaque] = useState("");
  const [listaHistorico, setListaHistorico] = useState([]);
  const [listSeries, setListSeries] = useState([]);
  const [listOptionsData, setListOptionsData] = useState([]);

  // Carregar lista de ordens
  useEffect(() => {
    if (dadosUsuario) setListaHistorico(dadosUsuario?.carteira);
  }, [dadosUsuario]);

  // Filtrar Série de gráfico
  const filtrarSeries = useCallback(value => {
    let mes = moment().format("MM");

    if (value) {
      let registrosDoDia = value.filter(item => {
        return moment(item?.data).format("MM") === mes;
      });
      let filtro = registrosDoDia.map(item => item?.lucro);
      return filtro;
    }
  }, []);

  // Filtrar Série de gráfico
  const filtrarDatas = useCallback(value => {
    let mes = moment().format("MM");

    if (value) {
      let registrosDoDia = value.filter(item => {
        return moment(item?.data).format("MM") === mes;
      });
      let filtro = registrosDoDia.map(item => {
        return item.data;
      });
      return filtro;
    }
  }, []);

  // Gráfico
  const series = [
    {
      name: "Lucro",
      data: listSeries,
      color: "#231225"
    }
  ];

  const options = {
    title: {
      text: "Desempenho anual",
      style: {
        fontSize: "16px",
        fontWeight: "normal",
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        color: Cor.Purple
      }
    },
    chart: {
      zoom: false,
      foreColor: "#333",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    dataLabels: {
      enabled: false,
      formatter: function(val, opts) {
        return `R$ ${val.toFixed(2)}`;
      },
      style: {
        colors: ["#333"]
      },
      background: {
        enabled: true,
        padding: 8,
        foreColor: "#fff",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#fff",
        opacity: 0.9
      }
    },
    stroke: {
      show: true,
      curve: "smooth",
      colors: ["#231225"],
      width: 2
    },
    yaxis: {
      width: "100%",
      labels: {
        show: true,
        formatter(value) {
          return `R$ ${value}`;
        }
      }
    },
    xaxis: {
      //type: "datetime",
      categories: listOptionsData
    },
    markers: {
      size: 0,
      colors: "#231225",
      strokeColors: "#231225",
      strokeWidth: 2
    },
    tooltip: {
      theme: "dark",
      marker: {
        show: true
      },
      x: {
        format: "hh:mm"
      }
    }
  };

  // Recuperar dados
  const recuperarDados = useCallback(async () => {
    try {
      let dados = recuperarDadosLocais();
      setDadosUsuario(dados[0]);
      setValueCurrent(dados[0]?.saldoAtual);
      setListSeries(filtrarSeries(dados[0]?.carteira));
      setListOptionsData(filtrarDatas(dados[0]?.carteira));
    } catch (error) {
      history.push("/login");
    } finally {
    }
  }, [history, filtrarSeries, filtrarDatas]);

  useEffect(() => {
    setTimeout(() => {
      recuperarDados();
    }, 500);
  }, [recuperarDados]);

  // Adicionar saldo
  const addSaldo = () => {
    if (depositaValor) {
      let resultado = parseFloat(valueCurrent) + parseFloat(depositaValor);
      let dados = recuperarDadosLocais();
      dados[0].saldoAtual = resultado;
      try {
        atualizarDadosLocais(dados);
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
      }
      setDepositaValor("");
    }
  };

  // Saque saldo
  const saqueSaldo = () => {
    if (saque) {
      if (saque <= parseFloat(valueCurrent)) {
        let resultado = parseFloat(valueCurrent) - parseFloat(saque);
        let dados = recuperarDadosLocais();
        dados[0].saldoAtual = resultado;
        try {
          atualizarDadosLocais(dados);
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
        }
      } else {
        setShowAlert(true);
        setAlert(
          <Alert
            message="Seu saldo não é suficiente! Verifique seu saldo disponível"
            value="Ok"
            onClick={removeAlert}
            type="erro"
          />
        );
      }
      setSaque("");
    }
  };

  // Formatar números
  const formatNumber = value => {
    const valor = parseFloat(value);
    const conversao = valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2
    });
    return conversao;
  };

  const removeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <Header />
      <Grid container className="main">
        <Grid container className="container welcome">
          <Label>
            Olá <em>{dadosUsuario?.nome}</em>, seja bem vindo ao seu Trading
            System!
          </Label>
        </Grid>

        {/* DEPOSITO E SAQUE */}
        <Grid
          container
          spacing={2}
          className="container card-arredondado update-wallet"
        >
          <Grid item xs={12} md={6}>
            <InputGroup
              typeAddon="R$"
              type="number"
              className="form-control"
              value={depositaValor}
              placeholder="1.000,00"
              name="adicionaValor"
              onChange={event => setDepositaValor(event.target.value)}
              onClick={addSaldo}
              valueButton="Deposite"
              theme="btn-success"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputGroup
              typeAddon="R$"
              type="number"
              className="form-control"
              value={saque}
              placeholder="-1.000,00"
              name="saqueValor"
              onChange={event => setSaque(event.target.value)}
              onClick={saqueSaldo}
              valueButton="Saque"
              theme="btn-danger"
            />
          </Grid>
        </Grid>

        {/* SALDOS */}
        <Grid
          container
          spacing={2}
          className="container card-arredondado exhibit"
        >
          <Grid item xs={6} md={3} className="border-g1">
            <Label weight="bold">Saldo disponível: </Label>
            <Label size="20px" color={Cor.Green}>
              {valueCurrent ? formatNumber(Number(valueCurrent)) : "R$ 0,00"}
            </Label>
          </Grid>
          <Grid item xs={6} md={3} className="border-g2">
            <Label weight="bold">Lucro Diário</Label>
            <Label size="20px" color={Cor.GreenMusgo}>
              {dadosUsuario?.lucroDia
                ? formatNumber(dadosUsuario?.lucroDia)
                : "R$ 0,00"}
            </Label>
          </Grid>
          <Grid item xs={6} md={3} className="border-g3">
            <Label weight="bold">Lucro Semanal</Label>
            <Label size="20px" color={Cor.GreenOcean}>
              {dadosUsuario?.lucroSemana
                ? formatNumber(dadosUsuario?.lucroSemana)
                : "R$ 0,00"}
            </Label>
          </Grid>
          <Grid item xs={6} md={3} className="border-g4">
            <Label weight="bold">Lucro Mensal</Label>
            <Label size="20px" color={Cor.GreenTree}>
              {dadosUsuario?.lucroMes
                ? formatNumber(dadosUsuario?.lucroMes)
                : "R$ 0,00"}
            </Label>
          </Grid>
        </Grid>

        {/* GRAFICO E ORDENS RECENTES */}
        <Grid
          container
          item
          spacing={4}
          xs={12}
          className="container card-arredondado exhibit"
        >
          {listaHistorico.length > 0 ? (
            <>
              <Grid item xs={12} md={8}>
                <ReactApexChart
                  options={options}
                  series={series}
                  type="line"
                  height={350}
                  width="100%"
                />
              </Grid>
              <Grid item xs={12} md={4} className="card-historico">
                <Grid
                  container
                  justify="space-between"
                  className="historico-title"
                >
                  <Grid item>
                    <h4>ORDENS RECENTES</h4>
                  </Grid>
                  <Grid item>
                    <h4>
                      <a href="/calculation">Ver tudo</a>
                    </h4>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TitleHistorico>Investimento</TitleHistorico>
                  </Grid>
                  <Grid item xs={4}>
                    <TitleHistorico>Payout</TitleHistorico>
                  </Grid>
                  <Grid item xs={4}>
                    <TitleHistorico>Lucro</TitleHistorico>
                  </Grid>
                </Grid>
                {listaHistorico.map((item, idx) => (
                  <CardHistorico key={idx}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <ValueHistorico>
                          R${parseFloat(item?.investimento).toFixed(2)}
                        </ValueHistorico>
                      </Grid>
                      <Grid item xs={4}>
                        <ValueHistorico>{item?.payout}%</ValueHistorico>
                      </Grid>
                      <Grid item xs={4}>
                        <ValueHistorico
                          className={
                            parseFloat(item?.lucro) > 0 ? "pos" : "neg"
                          }
                        >
                          R${parseFloat(item?.lucro).toFixed(2)}
                        </ValueHistorico>
                      </Grid>
                    </Grid>
                  </CardHistorico>
                ))}
              </Grid>
            </>
          ) : (
            <NoData size="18px">
              Histórico indisponível no momento! Verifique suas ordens em{" "}
              <a href="/calculation">Calculadora</a>!
            </NoData>
          )}
        </Grid>
      </Grid>
      <Footer />
      {showAlert && alert}
    </>
  );
};

export default Main;
