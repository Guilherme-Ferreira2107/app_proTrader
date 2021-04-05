import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import Loading from "../../components/loading";
import { Wrapper, LogoIcon, Load } from "./styles";
// Redux
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const InitialApp = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      if (!user?.token) {
        history.push("/login");
      } else {
        history.push("/main");
      }
    }, [1000]);
  }, [user, history]);

  return (
    <Wrapper>
      <LogoIcon src={Logo} alt="Pro Trader" />
      <Load>Carregando...</Load>
      <Loading />
    </Wrapper>
  );
};
export default InitialApp;
