import React, { useEffect, useState } from "react";
import "./styles.css";

import Loading from "../../../components/loading";
import IconCheck from "../../../assets/icons/checkmark.png";
import { Redirect } from "react-router";

const Register = () => {
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputPass, setInputPass] = useState();
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    setInputName("");
    setInputEmail("");
    setInputPass("");
    setLoading(false);
    setRedirect(false);
    setMessage("");
  }, []);

  const handleSubmit = () => {};

  const inputChangeName = (value) => {};

  const inputChangeEmail = (value) => {};

  const inputChangePass = (value) => {};

  const registerUser = (value) => {};

  return (
    <div className="register">
      <section>
        <div className="box-register">
          <form onSubmit={handleSubmit}>
            <h2>Crie sua conta</h2>
            <br />
            <label>Nome</label>
            <input
              placeholder="Insira seu nome"
              value={inputName}
              onChange={inputChangeName}
            />
            <label>E-mail</label>
            <input
              placeholder="trader@gmail.com"
              value={inputEmail}
              onChange={inputChangeEmail}
            />
            <label>Senha</label>
            <input
              placeholder="Crie uma senha"
              type="password"
              value={inputPass}
              onChange={inputChangePass}
            />
            {loading ? (
              <div className="loading">
                <Loading />
              </div>
            ) : (
              <input
                className="button-register"
                name="register"
                type="submit"
                value="Cadastrar"
                onClick={registerUser}
              />
            )}
            <p className="message-erro text-center">{message}</p>
            {redirect === "main" ? <Redirect to="/" /> : null}
            <div className="box-option">
              <a href="/Login">
                Já é cadastrado? <b>Entrar</b>
              </a>
            </div>
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
