import styled from "styled-components";
import { Cor } from "../../../assets/cores";

export const Wrapper = styled.div`
  padding: 15px;

  .infoSaldo {
    margin: 10px;

    p {
      padding: 0;
      margin: 0;
    }
  }

  select {
    position: relative;
    width: 100%;
    height: 40px;
    padding: 0 15px;
    margin-top: 5px;
    line-height: 38px;
    color: ${Cor.White};
    font-size: 14px;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-color: ${Cor.White};
    border-radius: 0.25rem;
    cursor: pointer;
  }

  .listagem-resultados {
    border: 0px solid red;
    margin-top: 36px;
    margin-bottom: 16px;
    height: 250px;
    overflow-y: scroll;

    &::-webkit-scrollbar-thumb {
      background: #23122511;
    }
    &::-webkit-scrollbar {
      background-color: #fff;
    }
  }

  .resultado {
    margin: 5px 0 0;
    display: flex;
    align-items: center;
    align-content: center;

    p {
      padding: 0;
      margin: 0;
    }

    button {
      width: 100%;
    }
  }

  option {
    color: ${Cor.Purple};
    font-size: 16px;
  }

  .icon {
    position: absolute;
    margin-left: -30px;
    margin-top: 14px;

    &.MuiSvgIcon-root {
      color: ${Cor.White};
    }
  }
`;
export const FormCalculation = styled.form`
  display: flex;
  align-content: center;
  align-items: center;
  background-color: ${Cor.Purple};
  padding: 20px;
  margin: 20px 0px 0px;
  border-radius: 0.25rem;

  @media (min-width: 400px) {
    margin: 20px;
  }
`;
export const Title = styled.h2``;
export const Btn = styled.button``;
