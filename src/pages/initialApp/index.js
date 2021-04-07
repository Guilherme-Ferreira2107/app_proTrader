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

const InitialApp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector((state) => state.email);
  const nome = useSelector((state) => state.nome);
  const emailEncode = b64.encode(email);

  // Recuperar dados
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
    let dados = JSON.parse(localStorage.getItem("@wallet-app/dadosUsuario"));
    setTimeout(() => {
      if (!email && !nome && !dados[0]?.email) {
        history.push("/login");
      } else {
        let dadosUsuario = [
          {
            nome: nome,
            email: email,
            saldoAtual: 0,
            saldoInicial: 0,
            lucroDia: 0,
            lucroSemana: 0,
            lucroMes: 0,
            carteira: [
              {
                hora: "",
                ordemValor: 0,
                resultado: 0,
              },
            ],
          },
        ];
        localStorage.setItem(
          "@wallet-app/dadosUsuario",
          JSON.stringify(dadosUsuario)
        );
        history.push("/main");
      }
    }, [1000]);
  }, [email, nome, history]);

  return (
    <Wrapper>
      <LogoIcon src={Logo} alt="Pro Trader" />
      <Load>Carregando...</Load>
      <Loading />
    </Wrapper>
  );
};
export default InitialApp;
