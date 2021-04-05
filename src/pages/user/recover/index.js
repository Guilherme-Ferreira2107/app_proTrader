import React, { useEffect, useState } from "react";
import "./styles.css";
import { Redirect } from "react-router-dom";
import Loading from "../../../components/loading";
import Logo from "../../../assets/images/logo.png";

const Recover = () => {
  const [inputEmail, setInputEmail] = useState();
  const [redirect, setRedirect] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    setRedirect("");
    setLoading(false);
    setMessage("");
  }, []);

  const inputChangeEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const _recoverPass = async () => {};

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="recover">
      <section>
        <div className="box-recover">
          <form onSubmit={handleSubmit}>
            <div className="content text-center">
              <img src={Logo} alt="Logo" />
            </div>
            <h2>Recuperação de senha</h2>
            <label>Informe seu E-mail</label>
            <input
              placeholder="trader@gmail.com"
              value={inputEmail}
              onChange={inputChangeEmail}
            />
            {loading ? (
              <div className="loading">
                <Loading />
              </div>
            ) : (
              <input
                className="button-recover"
                name="Recover"
                type="submit"
                value="Recuperar Senha"
                onClick={_recoverPass}
              />
            )}
            <p className="message-erro text-center">{message}</p>

            <div className="box-option">
              <a href="/login">
                Já é cadastrado? <b>Entrar</b>
              </a>
            </div>
          </form>
          {redirect === "login" ? <Redirect to="/login" /> : null}
        </div>
      </section>
    </div>
  );
};

export default Recover;
