import React from "react";
import PropTypes from "prop-types";

import { Wrapper, LabelForm, InputForm } from "./styles.js";
import { ExpandMore } from "@material-ui/icons";

const Select = React.forwardRef((props, ref) => {
  const { name, id, forLabel, labelColor, label, options, onChange } = props;

  return (
    <Wrapper>
      <LabelForm for={forLabel} labelColor={labelColor}>
        {label}
      </LabelForm>
      <select name={name} id={id} ref={ref} onChange={onChange}>
        {options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <ExpandMore fontSize="large" className="icon" />
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
