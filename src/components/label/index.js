import React from "react";

import { Wrapper } from "./styles.js";

const Label = ({ children, size, color, align, weight }) => {
  return (
    <Wrapper color={color} size={size} align={align} weight={weight}>
      {children}
    </Wrapper>
  );
};

export default Label;
