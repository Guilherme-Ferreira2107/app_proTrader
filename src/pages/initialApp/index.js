import React, { useEffect, useState } from "react";
import _ from "lodash";
import b64 from "base-64";
import firebase from "firebase";

// Componentes
import Logo from "../../assets/images/logo.png";
import Loading from "../../components/loading";

// Styles
import { Wrapper, LogoIcon, Load } from "./styles";

// Redux
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNome } from "../../store/modulos/users/actions";

// Services
import {
  atualizarDadosLocais,
  recuperarDadosLocais,
} from "../../services/authService";

const InitialApp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector((state) => state.email);
  const nome = useSelector((state) => state.nome);
  const emailEncode = b64.encode(email);
  const [dadosInciais, setDadosInciais] = useState([]);

  useEffect(() => {
    setDadosInciais([
      {
        nome: nome,
        email: email,
        saldoAtual: 0,
        saldoInicial: 0,
        lucroDia: 0,
        lucroSemana: 0,
        lucroMes: 0,
        carteira: [],
      },
    ]);
  }, [email, nome]);

  // Recuperar dados firebase
  useEffect(() => {
    try {
      firebase
        .database()
        .ref(`user/${emailEncode}`)
        .once("value")
        .then((snapshot) => {
          const resultado = _.values(snapshot.val());
          dispatch(updateNome(resultado[0]?.nome));
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, [dispatch, emailEncode]);

  useEffect(() => {
    let dados = recuperarDadosLocais();
    setTimeout(() => {
      if (!email && !nome && !dados) {
        history.push("/login");
      } else {
        atualizarDadosLocais(dadosInciais);
        history.push("/main");
      }
    }, [1000]);
  }, [email, nome, history, dadosInciais]);

  return (
    <Wrapper>
      <LogoIcon src={Logo} alt="Pro Trader" />
      <Load>Carregando...</Load>
      <Loading />
    </Wrapper>
  );
};
export default InitialApp;
