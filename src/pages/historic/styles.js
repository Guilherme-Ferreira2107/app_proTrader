import styled from "styled-components";
import { Cor } from "../../assets/cores";

export const WrapperHistoric = styled.div`
  padding: 0px 15px;
  margin-bottom: 20px;
  background-color: ${Cor.White58};
  border-radius: 0 0 0 100%;
  animation-name: historic-background;
  animation-duration: 3s;

  @keyframes historic-background {
    from {
      background-color: ${Cor.White7};
      border-radius: 0 100% 100% 100%;
    }

    to {
      background-color: ${Cor.White58};
      border-radius: 0 0 0 100%;
    }
  }

  .table {
    height: 350px;
    overflow-y: scroll;
  }
  .table::-webkit-scrollbar-thumb {
    background: ${Cor.White7};
  }
  .table::-webkit-scrollbar {
    background-color: ${Cor.Purple};
  }
  .rdt_TableHeader {
    display: none;
  }
  .rdt_TableCol_Sortable {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Title = styled.h2``;

export const customStyles = {
  headCells: {
    style: {
      background: Cor.Purple,
      marginLeft: "3px",
      fontSize: "16px",
      color: "white",
    },
  },
  rows: {
    style: {
      marginBottom: "1px",
      marginTop: "1px",
    },
  },
  Pagination: {
    styles: {
      color: Cor.Ice,
    },
  },
  cells: {
    style: {
      marginLeft: "3px",
      background: Cor.Purple90,
      fontSize: "14px",
      color: "white",
    },
  },
};
