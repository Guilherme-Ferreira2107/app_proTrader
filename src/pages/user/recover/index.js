import React, { useState } from "react";
import "./styles.css";
import Logo from "../../../assets/images/logo.png";

// Components
import Loading from "../../../components/loading";
import LogoIcon from "../../../components/logo";
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
import { recoverPassword } from "../../../services/authService";

const Recover = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [inputEmail, setInputEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();
  const [enablePopup, setEnablePopup] = useState(false);

  const inputChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const recoverPass = async (data) => {
    try {
      setLoading(true);
      await recoverPassword(data?.email)
        .then(() => {
          setEnablePopup(true);
          setInputEmail("");
        })
        .catch((error) => setMessage(error.message));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const redirect = () => {
    setEnablePopup(false);
    history.push("/Login");
  };

  return (
    <div className="recover">
      <section>
        <div className="box-recover">
          <form onSubmit={handleSubmit(recoverPass)}>
            <LogoIcon src={Logo} alt="Logo" />
            <Title>Recuperação de senha</Title>
            <Input
              label="Informe seu E-mail"
              name="email"
              placeholder="trader@gmail.com"
              value={inputEmail}
              onChange={inputChangeEmail}
              ref={register({
                required: "Email é obrigatório!",
              })}
            />
            <Loading loading={loading}>
              <Submit type="submit" name="Recover" value="Recuperar Senha" />
            </Loading>
            <Label color="red" weight="bold" align="center">
              {message}
            </Label>
            <Link className="registerMobile" href="/Login">
              Voltar para Login
            </Link>
            {enablePopup && (
              <Alert
                onClick={redirect}
                message="E-mail de recuperação de senha, enviado com sucesso!"
                value="Faça login"
              />
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Recover;
