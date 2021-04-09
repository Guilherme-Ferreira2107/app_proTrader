import React from "react";
import PropTypes from "prop-types";
import { Cor } from "../../assets/cores";

import { Wrapper, AlertForm, AlertButton } from "./styles.js";

const Alert = (props) => {
  const { onClick, message, value, type } = props;

  const checkType = () => {
    if (type === "sucesso") return Cor.Green90;
    else if (type === "erro") {
      return Cor.Red;
    }
  };

  return (
    <Wrapper onClick={onClick} type={checkType}>
      <AlertForm>{message}</AlertForm>
      <AlertButton>{value}</AlertButton>
    </Wrapper>
  );
};

Alert.propTypes = {
  value: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.oneOfType([PropTypes.func]),
};

Alert.defaultProps = {
  value: "",
  message: "",
  onClick: () => {},
};

export default Alert;
