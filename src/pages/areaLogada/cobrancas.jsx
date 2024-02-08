import React from "react";
import { useParams } from "react-router";

import Header from "../../compositions/areaLogada/header";
import GruposConteiner from "../../compositions/areaLogada/cobrancas/Conteiner";
import CobrancasComposition from "../../compositions/areaLogada/cobrancas/Cobrancas";
import GrupoCobrancaComposition from "../../compositions/areaLogada/cobrancas/GrupoCobranca";

export default function Cobrancas(props) {
  const params = useParams();
  const { group_id } = params;
  if (group_id) {
    return (
      <>
        <Header />
        <GruposConteiner>
          <GrupoCobrancaComposition group_id={group_id} />
        </GruposConteiner>
      </>
    );
  }

  return (
    <>
      <Header />
      <GruposConteiner>
        <h1>Grupos de Pagamento</h1>
        <CobrancasComposition />
      </GruposConteiner>
    </>
  );
}
