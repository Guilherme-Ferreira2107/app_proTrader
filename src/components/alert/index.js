import React from "react";
import PropTypes from "prop-types";

import { Wrapper, AlertForm, AlertButton } from "./styles.js";

const Alert = (props) => {
  const { onClick, message, value, type } = props;

  const checkType = () => {
    if (type === "sucesso") return "#5cb85ce5";
    else if (type === "erro") {
      return "#ff0000";
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
