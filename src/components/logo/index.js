import React from "react";

import { Wrapper, Image } from "./styles.js";

const LogoIcon = (props) => {
  const { src, alt } = props;
  return (
    <Wrapper>
      <Image src={src} alt={alt} />
    </Wrapper>
  );
};

export default LogoIcon;
