import React from "react";
import { useParams } from "react-router";

import Header from "../../compositions/areaLogada/header";
import GruposConteiner from "../../compositions/areaLogada/groups/Conteiner";
import GruposComposition from "../../compositions/areaLogada/groups/Grupos";
import GrupoComposition from "../../compositions/areaLogada/groups/Grupo";

export default function Grupos(props) {
  const params = useParams();
  const { group_id } = params;
  if (group_id) {
    return (
      <>
        <Header />
        <GruposConteiner>
          <GrupoComposition group_id={group_id} />
        </GruposConteiner>
      </>
    );
  }

  return (
    <>
      <Header />
      <GruposConteiner>
        <h1>Grupos</h1>
        <GruposComposition />
      </GruposConteiner>
    </>
  );
}
