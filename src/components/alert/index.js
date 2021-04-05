import React from "react";
import PropTypes from "prop-types";

import { Wrapper, AlertForm, AlertButton } from "./styles.js";

const Alert = (props) => {
  const { onClick, message, value } = props;
  return (
    <Wrapper onClick={onClick}>
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
