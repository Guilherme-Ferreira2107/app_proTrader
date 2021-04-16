import React, { useState } from "react";
import firebase from "firebase";
import b64 from "base-64";
import "./styles.css";

import IconCheck from "../../../assets/icons/checkmark.png";

// Components
import Loading from "../../../components/loading";
import Title from "../../../components/title";
import Input from "../../../components/input";
import Submit from "../../../components/submit";
import Label from "../../../components/label";
import Link from "../../../components/link";
import Alert from "../../../components/alert";

// FormHooks
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Services
import { registerUser } from "../../../services/authService";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputPass, setInputPass] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [enablePopup, setEnablePopup] = useState(false);

  const handlerSend = async (data) => {
    try {
      setLoading(true);
      await registerUser(data?.email, data?.password)
        .then(() => {
          setEnablePopup(true);
          setInputName("");
          setInputEmail("");
          setInputPass("");

          let emailB64 = b64.encode(data?.email);
          let nome = data?.name;

          firebase
            .database()
            .ref("/user/" + emailB64)
            .push({
              nome,
              email: data?.email,
              saldoAtual: 0,
              saldoInicial: 0,
              lucroDia: 0,
              lucroSemana: 0,
              lucroMes: 0,
              carteira: [],
            })
            .then(() => console.log("Sucesso"))
            .catch((error) => setMessage(error.message));
        })
        .catch((error) => setMessage(error.message));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const inputChangeName = (event) => {
    setInputName(event.target.value);
  };

  const inputChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const inputChangePass = (event) => {
    setInputPass(event.target.value);
  };

  const redirect = () => {
    setEnablePopup(false);
    history.push("/Login");
  };

  return (
    <div className="register">
      {enablePopup && (
        <Alert
          onClick={redirect}
          message="Usuário cadastrado com sucesso!"
          value="Faça login"
        />
      )}
      <section>
        <div className="box-register">
          <form onSubmit={handleSubmit(handlerSend)}>
            <Title>Crie sua conta</Title>
            <Input
              label="Nome"
              placeholder="Insira seu nome"
              name="name"
              value={inputName}
              ref={register({
                required: "Nome é obrigatório!",
              })}
              onChange={inputChangeName}
            />
            <Input
              label="E-mail"
              placeholder="trader@gmail.com"
              name="email"
              value={inputEmail}
              ref={register({
                required: "Email é obrigatório!",
              })}
              onChange={inputChangeEmail}
            />
            <Input
              label="Senha"
              placeholder="Insira sua senha"
              type="password"
              name="password"
              ref={register({
                required: "Senha é obrigatório!",
              })}
              onChange={inputChangePass}
              value={inputPass}
            />
            <Loading loading={loading}>
              <Submit type="submit" name="register" value="Cadastrar" />
            </Loading>
            <Label color="red" weight="bold" align="center">
              {message}
            </Label>
            <Link href="/Login">Já é cadastrado?</Link>
          </form>
        </div>
        <div className="box-content">
          <h2>Trader Wallets</h2>
          <br />
          <div className="plan">
            <h4>Assine nosso plano e aproveite à todos os benefícios</h4>
            <br />
            <p>
              <img src={IconCheck} alt="Icon" width="25" /> Acesso ilimitado ao
              recursos de cálculos
            </p>

            <p>
              <img src={IconCheck} alt="Icon" width="25" /> Acesso ilimitado à
              quantidade de ordens
            </p>

            <p>
              <img src={IconCheck} alt="Icon" width="25" /> Histórico completo
              de suas ordens
            </p>

            <p>
              <img src={IconCheck} alt="Icon" width="25" /> Acesso à todas as
              funções do Gráfico de Desempenho
            </p>

            <p>
              <img src={IconCheck} alt="Icon" width="25" /> Participações de
              sorteios e brindes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
