import styled from "styled-components";
import { Cor } from "../../../assets/cores";

export const Wrapper = styled.div`
  padding: 15px;

  & .container {
    margin: 10px 0;
  }
  & .calculos {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  & .card-border1 {
    margin: 5px 0;
    border-left: 5px solid ${Cor.Green90};
    padding-left: 10px;
  }
  & .card-border2 {
    margin: 5px 0;
    border-left: 5px solid ${Cor.Green50};
    padding-left: 10px;
  }

  .resultado {
    margin: 20px 0 0;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    align-items: center;
    align-content: center;

    p {
      margin: 0;
    }

    button {
      width: 100px;
      margin: 0 10px;
    }
  }
`;

export const Title = styled.h2``;
