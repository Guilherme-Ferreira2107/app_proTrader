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

    h4 {
      color: ${Cor.Green90};
      font-weight: bold;
    }
  }
  & .card-border2 {
    margin: 5px 0;
    border-left: 5px solid ${Cor.Green75};
    padding-left: 10px;

    h4 {
      color: ${Cor.Green75};
      font-weight: bold;
    }
  }

  .resultado {
    margin: 20px 0 0;
    display: flex;
    align-items: center;
    align-content: center;

    p {
      padding: 0;
      margin: 0;
    }

    button {
      width: 100%;
      margin: 0 10px;
    }
  }
`;
export const FormCalculation = styled.form`
  display: flex;
  align-content: center;
  align-items: center;
  background-color: ${Cor.Purple};
  padding: 20px;
  border-radius: 0.25rem;
`;
export const Title = styled.h2``;
export const Btn = styled.button``;
