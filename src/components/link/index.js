import React, { useEffect, useState } from "react";

import { Wrapper, Ref } from "./styles.js";

const Link = (props) => {
  const { href, children, size, color, background, theme } = props;
  const [enableTheme, setEnableTheme] = useState(false);

  useEffect(() => {
    theme && setEnableTheme(true);
  }, [theme]);

  return (
    <Wrapper>
      <Ref
        href={href}
        size={size}
        color={color}
        background={background}
        theme={enableTheme}
      >
        {children}
      </Ref>
    </Wrapper>
  );
};

export default Link;
