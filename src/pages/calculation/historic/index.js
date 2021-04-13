import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";

// Styles
import { WrapperHistoric, Title, customStyles, Btn } from "./styles.js";

// Material UI
import { Grid } from "@material-ui/core";
import { Autorenew, SwapVert } from "@material-ui/icons";

// Tabela
import DataTable from "react-data-table-component";

// Serviços
import { recuperarDadosLocais } from "../../../services/authService.js";

const Historic = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [dadosUsuario, setDadosUsuario] = useState([]);
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
      selector: "lucro",
      sortable: true,
    },
  ];

  // Recuperar dados
  const recuperarDados = useCallback(async () => {
    try {
      setLoading(true);
      let dados = recuperarDadosLocais();
      setDadosUsuario(dados);
    } catch (error) {
      history.push("/login");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [history]);

  useEffect(() => {
    recuperarDados();
  }, [recuperarDados]);

  return (
    <WrapperHistoric className="card">
      <Grid container justify="space-between">
        <Grid item>
          <Title>Histórico</Title>
        </Grid>
        <Grid item>
          <Btn className="copy btn btn-info" onClick={() => recuperarDados()}>
            <Autorenew fontSize="large" />
          </Btn>
        </Grid>
      </Grid>
      <Grid container item xs={12} className="table">
        <DataTable
          columns={columns}
          data={dadosUsuario[0]?.carteira}
          customStyles={customStyles}
          sortIcon={sortIcon}
          progressPending={loading}
        />
      </Grid>
    </WrapperHistoric>
  );
};
export default Historic;
