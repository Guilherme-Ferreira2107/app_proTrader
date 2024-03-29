import styled from "styled-components";
import { Cor } from "../../assets/cores";

export const Wrapper = styled.div`
  &.main {
    background-color: #f0f0f094;
    border-radius: 100% 0 0 0;
    animation-name: main-background;
    animation-duration: 3s;
  }
  @keyframes main-background {
    from {
      background-color: #f0f0f010;
      border-radius: 100% 100% 100% 0;
    }

    to {
      background-color: #f0f0f094;
      border-radius: 100% 0 0 0;
    }
  }
  &.main .welcome {
    margin-top: 20px;
  }
  &.main .exhibit {
    margin: 20px;
    padding: 20px;
    color: #333;
  }
  &.main .exhibit p {
    padding: 0;
    margin: 0;
  }
  &.main .border-g1 {
    border-left: 5px solid #5cb85c;
    padding-left: 10px;
  }
  &.main .border-g2 {
    border-left: 5px solid #6b8e23;
    padding-left: 10px;
  }
  &.main .border-g3 {
    border-left: 5px solid #3cb371;
    padding-left: 10px;
  }
  &.main .border-g4 {
    border-left: 5px solid #006400;
    padding-left: 10px;
  }
  &.main .border-green1 .green1 {
    color: #5cb85c;
    font-weight: bold;
    font-size: 20px;
  }
  &.main .border-green2 .green2 {
    color: #5cb85cbf;
    font-weight: bold;
    font-size: 20px;
  }
  &.main .border-green3 .green3 {
    color: #5cb85c80;
    font-weight: bold;
    font-size: 20px;
  }
  &.main .border-green4 .green4 {
    color: #5cb85c;
    font-weight: bold;
    font-size: 20px;
  }
  &.main .card-principal h2 {
    padding: 0;
  }
  &.main .container .form-control {
    width: 100%;
  }
  &.main .container .btn {
    min-width: 100px;
  }
  &.main .update-wallet {
    margin: 20px;
    color: #fff;
    padding: 20px;
  }
  .card-historico {
    border: none;
    border-radius: 5px;
    background-color: #231225;
    box-shadow: 5px 5px 18px #9291915b;
    height: 350px;
    color: #fff;
    padding: 20px;
    overflow-y: scroll;
  }
  .historico-title {
    margin: 10px 0;
    font-weight: bold;
    padding: 5px;
    border: none;
    border-radius: 0.25rem;
  }
  .historico-title a {
    padding: 10px;
    background-color: #f5f5f511;
    color: #f0f0f0;
    text-decoration: none;
    border-radius: 0.25rem;
  }
  .historico-title a:hover {
    color: #333;
    background-color: #f5f5f5;
  }
  .card-historico::-webkit-scrollbar-thumb {
    background: #f5f5f511;
  }
  .card-historico::-webkit-scrollbar {
    background-color: #231225;
  }
`;

export const CardHistorico = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const TitleHistorico = styled.h4`
  display: flex;
  margin: 5px 0 10px 0;
`;

export const ValueHistorico = styled.p`
  display: flex;
  padding: 5px;
  border-bottom: 1px solid ${Cor.White7};

  &.pos {
    color: ${Cor.Green};
  }

  &.neg {
    color: ${Cor.Red};
  }
`;
