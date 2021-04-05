import React from "react";

import { Wrapper } from "./styles.js";

const Label = ({ children, size, color, align }) => {
  return (
    <Wrapper color={color} size={size} align={align}>
      {children}
    </Wrapper>
  );
};

export default Label;
