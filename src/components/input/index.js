import React from "react";
import PropTypes from "prop-types";

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

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.oneOfType([PropTypes.func]),
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  onChange: () => {},
  label: "",
};

export default Input;
