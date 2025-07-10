import React from "react";
import { useParams } from "react-router";

import Header from "../../compositions/areaLogada/header";
import InscritosConteiner from "../../compositions/areaLogada/rituais/defuntaria/Conteiner";
import InscritosComposition from "../../compositions/areaLogada/rituais/defuntaria/Inscritos";
import RituaisComposition from "../../compositions/areaLogada/rituais/defuntaria/Rituais";

export default function Usuarios(props) {
  const params = useParams();
  const { ritual_id } = params;
  if (ritual_id) {
    return (
      <>
        <Header />
        <InscritosConteiner>
          <InscritosComposition ritualId={ritual_id} />
        </InscritosConteiner>
      </>
    );
  }

  return (
    <>
      <Header />
      <InscritosConteiner>
        <RituaisComposition />
      </InscritosConteiner>
    </>
  );
}
