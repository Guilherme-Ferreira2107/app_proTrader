import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { Wrapper, LabelForm, InputForm } from "./styles.js";

const Select = React.forwardRef((props, ref) => {
  const { name, id, forLabel, label, options } = props;

  return (
    <Wrapper>
      <label for={forLabel}>{label}</label>
      <select name={name} id={id} ref={ref}>
        {options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </Wrapper>
  );
});

Select.propTypes = {
  name: PropTypes.string.isRequired,
  forLabel: PropTypes.string,
};

Select.defaultProps = {
  forLabel: "text",
  placeholder: "",
};

export default Select;
