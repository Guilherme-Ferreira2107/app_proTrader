import React from "react";

import { Wrapper, LabelForm, InputForm } from "./styles.js";

const Input = React.forwardRef((props, ref) => {
  const { type, label, placeholder, name, value, onChange } = props;
  return (
    <Wrapper>
      <LabelForm>{label}</LabelForm>
      <InputForm
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        ref={ref}
        onChange={onChange}
      />
    </Wrapper>
  );
});

export default Input;
