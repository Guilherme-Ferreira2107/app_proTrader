import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const LabelForm = styled.label`
  color: ${(props) => (props.labelColor ? props.labelColor : "#333")};
  margin: 0 10px;
  width: 100%;
`;

export const InputForm = styled.input`
  width: 100%;
  color: #333;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 0.25rem;
  border: none;
  border-bottom: 1px solid rgb(199, 175, 38);
  outline: none;
`;
