import styled from "styled-components";

export const Button = styled.input`
  width: 100%;
  border: none;
  border-radius: 0.25rem;
  padding: 10px;
  color: #333;
  background-color: rgb(253, 217, 0);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

  &:hover {
    color: rgb(252, 252, 252);
    background-color: rgb(35, 18, 37);
    transition: 0.25s;
  }
`;
