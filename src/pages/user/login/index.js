import React, { useState } from "react";

// Components
import Loading from "../../../components/loading";
import Logo from "../../../assets/images/logo.png";

// Styles
import { Wrapper } from "./styles.js";

// FormHooks
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Services
import { authLogin } from "../../../services/loginService";

const Login = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPass, setInputPass] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  const inputChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const inputChangeSenha = (event) => {
    setInputPass(event.target.value);
  };

  const handlerSend = async (data) => {
    try {
      setLoading(true);
      await authLogin(data?.email, data?.password)
        .then(() => {
          history.push("/main");
        })
        .catch((error) => setMessage(error.message));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper className="login">
      <section>
        <div className="box-content">
          <h2>Trader Wallets</h2>
          <p>
            Conheça o Trader Wallets, a aplicação que ajuda a controlar seus
            tradings de forma eficiente.
          </p>
          <p>
            Faça cálculos rápidos e precisos com nossa calculadora de: Soros,
            Martingale e SorosGale.
          </p>
          <p>
            Confira sua performance de ganhos e perdas de seus investimentos.
          </p>
          <p>
            Controlar seu patrimônio nunca foi tão fácil. É online e gratuito!
          </p>
          <a href="/Register">Cadastre-se agora</a>
        </div>
        <div className="box-login">
          <form onSubmit={handleSubmit(handlerSend)}>
            <div className="content text-center">
              <img src={Logo} alt="Logo" />
            </div>
            <h2>Sign In</h2>
            <label>E-mail</label>
            <input
              placeholder="trader@gmail.com"
              name="email"
              value={inputEmail}
              ref={register({
                required: "Email é obrigatório!",
              })}
              onChange={inputChangeEmail}
            />
            <label>Senha</label>
            <input
              placeholder="Insira sua senha"
              type="password"
              name="password"
              ref={register({
                required: "Senha é obrigatório!",
              })}
              onChange={inputChangeSenha}
              value={inputPass}
            />
            <Loading loading={loading}>
              <input
                type="submit"
                className="button-login"
                name="Login"
                value="Login"
              />
            </Loading>
            <p className="message-erro text-center">{message}</p>
            <div className="box-option">
              <a href="/Recover">Esqueceu sua senha?</a>
              <a className="register" href="/Register">
                Cadastre-se agora
              </a>
            </div>
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

export default Login;
