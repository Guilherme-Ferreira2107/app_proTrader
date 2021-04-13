import React from "react";
import PropTypes from "prop-types";

import { WrapperForm } from "./styles.js";

const InputGroup = React.forwardRef((props, ref) => {
  const {
    typeAddon,
    type,
    className,
    value,
    placeholder,
    name,
    onChange,
    onClick,
    valueButton,
    theme,
  } = props;
  return (
    <WrapperForm className="form-inline">
      <div className="input-group">
        <span className="input-group-addon">{typeAddon}</span>
        <input
          type={type}
          name={name}
          className={className}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <div className="input-group-btn">
          <button onClick={onClick} className={`btn ${theme}`}>
            {valueButton}
          </button>
        </div>
      </div>
    </WrapperForm>
  );
});

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.oneOfType([PropTypes.func]),
};

InputGroup.defaultProps = {
  type: "text",
  placeholder: "",
  onChange: () => {},
  label: "",
};

export default InputGroup;
