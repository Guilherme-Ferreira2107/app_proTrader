import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 30px 10px 10px;
`;

export const Ref = styled.a`
  border: none;
  padding: 10px;
  color: #333;
  background-color: ${(props) => props.theme === true && "rgb(253, 217, 0)"};
  text-decoration: ${(props) => (props.theme === true ? "none" : "underline")};
  text-transform: ${(props) => props.theme === true && "uppercase"};
  font-weight: ${(props) => (props.theme === true ? "bold" : "italic")};
  box-shadow: ${(props) =>
    props.theme === true && "0 20px 50px rgba(0, 0, 0, 0.5)"};

  &:hover {
    background-color: ${(props) => props.theme === true && "rgb(35, 18, 37)"};
    text-decoration: ${(props) => props.theme === true && "none"};
    color: ${(props) => (props.theme === true ? "rgb(252, 252, 252)" : "#333")};
    transition: 0.25s;
  }
`;
