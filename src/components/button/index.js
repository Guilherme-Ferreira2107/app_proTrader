import React from "react";

import { Wrapper } from "./styles.js";

const Button = ({ type, value, size, color, background }) => {
  return (
    <Wrapper
      type={type}
      color={color}
      size={size}
      background={background}
      value={value}
    />
  );
};

export default Button;
