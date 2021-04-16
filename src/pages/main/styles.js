import styled from "styled-components";
import { Cor } from "../../assets/cores";

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
