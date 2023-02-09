import React from "react";

import Header from "../../compositions/areaLogada/header";
import UsuariosConteiner from "../../compositions/areaLogada/usuarios/Conteiner";
import UsuariosComposition from "../../compositions/areaLogada/usuarios/Usuarios";

export default function Usuarios(props) {
  return (
    <>
      <Header />
      <UsuariosConteiner>
        <UsuariosComposition />
      </UsuariosConteiner>
    </>
  );
}
