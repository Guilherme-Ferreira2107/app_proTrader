import styled from "styled-components";

export const Wrapper = styled.h2`
  padding: 5px 10px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
`;
