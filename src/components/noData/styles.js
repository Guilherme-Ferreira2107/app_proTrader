import styled from "styled-components";

export const Wrapper = styled.h2`
  padding: 20px;
  margin: auto;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
`;
