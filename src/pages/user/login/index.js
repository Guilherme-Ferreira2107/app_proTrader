import React, { useState } from "react";

// Components
import Loading from "../../../components/loading";
import Logo from "../../../assets/images/logo.png";
import Label from "../../../components/label";
import Title from "../../../components/title";
import Link from "../../../components/link";
import Input from "../../../components/input";
import Submit from "../../../components/submit";
import LogoIcon from "../../../components/logo";

// Styles
import { Wrapper, BoxContent, BoxLogin } from "./styles.js";

// FormHooks
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

// Material UI
import { Grid } from "@material-ui/core";

// Services
import { authLogin } from "../../../services/authService";

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
    <Wrapper>
      <section>
        <BoxContent>
          <Title color="#fff">Trader Wallets</Title>
          <Label color="#fff">
            Conheça o Trader Wallets, a aplicação que ajuda a controlar seus
            tradings de forma eficiente.
          </Label>
          <Label color="#fff">
            Faça cálculos rápidos e precisos com nossa calculadora de: Soros,
            Martingale e SorosGale.
          </Label>
          <Label color="#fff">
            Confira sua performance de ganhos e perdas de seus investimentos.
          </Label>
          <Label color="#fff">
            Controlar seu patrimônio nunca foi tão fácil. É online e gratuito!
          </Label>
          <Link theme href="/Register">
            Cadastre-se agora
          </Link>
        </BoxContent>
        <BoxLogin>
          <form onSubmit={handleSubmit(handlerSend)}>
            <LogoIcon src={Logo} alt="Logo" />
            <Title>Sign In</Title>
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
              onChange={inputChangeSenha}
              value={inputPass}
            />
            <Loading loading={loading}>
              <Submit type="submit" name="Login" value="Login" />
            </Loading>
            <Label color="red" weight="bold" align="center">
              {message}
            </Label>
            <Grid container>
              <Grid item xs={6}>
                <Link href="/Recover">Esqueceu sua senha?</Link>
              </Grid>
              <Grid item xs={6}>
                <Link className="registerMobile" href="/Register">
                  Cadastre-se agora
                </Link>
              </Grid>
            </Grid>
          </form>
        </BoxLogin>
      </section>
    </Wrapper>
  );
};

export default Login;
