import React from "react";

// Styles
import { WrapperHistoric, Title, customStyles } from "./styles.js";

// Material UI
import { Grid } from "@material-ui/core";

// Tabela
import DataTable from "react-data-table-component";
import { SwapVert } from "@material-ui/icons";

const Historic = () => {
  const sortIcon = <SwapVert />;
  const columns = [
    {
      name: "Data",
      selector: "data",
      sortable: true,
    },
    {
      name: "Investimento (R$)",
      selector: "investimento",
      sortable: true,
    },
    {
      name: "Payout (%)",
      selector: "payout",
      sortable: true,
    },
    {
      name: "Lucro (R$)",
      selector: "retorno",
      sortable: true,
    },
  ];
  const listHistorico = [
    {
      dia: "2021-04-08",
      hora: "1201",
      data: "2021-12-01 12:01",
      retorno: 285,
      investimento: 414,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1202",
      data: "2021-12-01 12:02",
      retorno: -350,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1203",
      data: "2021-04-03 12:01",
      retorno: -350,
      investimento: 870,
      payout: 94,
    },
    {
      dia: "2021-04-08",
      hora: "1204",
      data: "2021-04-04 12:01",
      retorno: 153,
      investimento: 648,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      data: "2021-04-05 12:01",
      retorno: 154,
      investimento: 646,
      payout: 66,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      data: "2021-05-08 12:01",
      retorno: 365,
      investimento: 870,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      data: "2021-06-08 12:01",
      retorno: 365,
      investimento: 870,
      payout: 99,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      data: "2021-07-08 12:01",
      retorno: 684,
      investimento: 813,
      payout: 87,
    },
    {
      dia: "2021-04-08",
      hora: "1205",
      data: "2021-09-08 12:01",
      retorno: 365,
      investimento: 870,
      payout: 97,
    },
    {
      dia: "2020-08-01",
      hora: "1205",
      data: "2021-04-08 12:01",
      retorno: 387,
      investimento: 768,
      payout: 87,
    },
    {
      dia: "2019-01-12",
      hora: "1205",
      data: "2021-04-08 12:01",
      retorno: 365,
      investimento: 844,
      payout: 94,
    },
  ];

  return (
    <WrapperHistoric>
      <Grid container item xs={12}>
        <Title>Histórico</Title>
      </Grid>
      <Grid container item xs={12} className="table">
        <DataTable
          columns={columns}
          data={listHistorico}
          customStyles={customStyles}
          sortIcon={sortIcon}
        />
      </Grid>
    </WrapperHistoric>
  );
};
export default Historic;
