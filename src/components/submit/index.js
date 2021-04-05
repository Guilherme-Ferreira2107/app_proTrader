import React from "react";

import { Button } from "./styles.js";

const Submit = (props) => {
  const { type, name, value } = props;

  return <Button type={type} name={name} value={value} />;
};

export default Submit;
