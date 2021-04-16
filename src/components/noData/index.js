import React from "react";

import { Wrapper } from "./styles.js";

const NoData = ({ children, size, color, align, bold }) => {
  return (
    <Wrapper color={color} size={size} align={align} bold={bold}>
      {children}
    </Wrapper>
  );
};

export default NoData;
