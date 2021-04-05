import React from "react";

import { Wrapper } from "./styles.js";

const Title = ({ children, size, color, align }) => {
  return (
    <Wrapper color={color} size={size} align={align}>
      {children}
    </Wrapper>
  );
};

export default Title;
