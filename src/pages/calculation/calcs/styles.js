import styled from "styled-components";
import { Cor } from "../../../assets/cores";

export const Wrapper = styled.div`
  padding: 15px;
  background-color: ${Cor.Whit58};
  border-radius: 100% 0 0 0;

  & .container {
    margin: 10px 0;
  }
  & .calculos {
    padding-top: 20px;
  }
  & .card1 {
    margin: 5px 0;
    border-left: 5px solid #5cb85c;
    padding-left: 10px;
  }
  & .card2 {
    margin: 5px 0;
    border-left: 5px solid #5cb85c64;
    padding-left: 10px;
  }
`;

export const Title = styled.h2``;
