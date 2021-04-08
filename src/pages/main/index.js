import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

// ApexChart
import ReactApexChart from "react-apexcharts";

// Components
import Header from "../../components/header";
import Footer from "../../components/footer";
import Loading from "../../components/loading";
import Alert from "../../components/alert";

// Material UI
import { Grid } from "@material-ui/core";

// Style
import "./styles.css";
import { CardHistorico } from "./styles";

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

  const series = [
    {
      name: "Lucro",
      data: [
        250,
        348,
        690,
        883,
        167,
        93,
        205,
        -334,
        0,
        -15,
        34,
        68,
        -100,
        89,
        164,
        278,
        333,
        399,
        465,
        322,
        50,
        -66,
        -400,
        155,
        200,
        312,
        554,
        675,
        700,
      ],
    },
  ];

  const options = {
    chart: {
      zoom: false,
      foreColor: "#333",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return `R$ ${val.toFixed(2)}`;
      },
      style: {
        colors: ["#231225"],
      },
      background: {
        enabled: true,
        padding: 8,
        foreColor: "#fff",
        borderRadius: 2,
        borderWidth: 1,
        borderColor: "#fff",
        opacity: 0.9,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      colors: ["#231225"],
      width: 2,
    },
    yaxis: {
      width: "100%",
      labels: {
        show: true,
        formatter(value) {
          return `R$ ${value}`;
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2021/1/1",
        "2021/1/2",
        "2021/1/3",
        "2021/1/4",
        "2021/1/5",
        "2021/1/6",
        "2021/1/7",
        "2021/1/8",
        "2021/1/9",
        "2021/1/10",
        "2021/1/11",
        "2021/1/12",
        "2021/1/13",
        "2021/1/14",
        "2021/1/15",
        "2021/1/16",
        "2021/1/17",
        "2021/1/18",
        "2021/1/19",
        "2021/1/20",
        "2021/1/21",
        "2021/1/22",
        "2021/1/23",
        "2021/1/24",
        "2021/1/25",
        "2021/1/26",
        "2021/1/27",
        "2021/1/28",
        "2021/1/29",
        "2021/1/30",
        "2021/1/31",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yyyy",
      },
    },
  };

  const listHistorico = [
    {
      dia: "2021-04-08",
      hora: "1201",
      retorno: 200,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1202",
      retorno: -350,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1203",
      retorno: -350,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1204",
      retorno: 360,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      retorno: 365,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      retorno: 365,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      retorno: 365,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      retorno: 365,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      retorno: 365,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      retorno: 365,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      retorno: 365,
      investimento: 870,
      payout: 87,
    },
  ];

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
        <Loading loading={loading}>
          <div className="container exhibit">
            <Grid container spacing={4} xs={12}>
              <Grid item xs={8}>
                <ReactApexChart
                  options={options}
                  series={series}
                  type="line"
                  height={350}
                  width="100%"
                />
              </Grid>
              <Grid item xs={4} className="cardHistorico">
                <Grid container justify="space-between">
                  <Grid item>
                    <b>HISTÓRICO</b>
                  </Grid>
                  <Grid item>
                    <a href="/historic">Ver tudo ></a>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    Payout
                  </Grid>
                  <Grid item xs={4}>
                    Investimento
                  </Grid>
                  <Grid item xs={4}>
                    Lucro
                  </Grid>
                </Grid>
                {listHistorico.map((item, idx) => (
                  <CardHistorico key={idx}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        {item.payout}%
                      </Grid>
                      <Grid item xs={4}>
                        R${item.investimento.toFixed(2)}
                      </Grid>
                      <Grid item xs={4}>
                        R${item.retorno.toFixed(2)}
                      </Grid>
                    </Grid>
                  </CardHistorico>
                ))}
              </Grid>
            </Grid>
          </div>
        </Loading>
      </div>

      <Footer />
      {showAlert && alert}
    </>
  );
};

export default Main;
