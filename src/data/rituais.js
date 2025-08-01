import React from "react";

import ritualdama from "../assets/ritual-dama-2025.png";
// import ritual2025 from "../assets/ritual-fim-de-ano.jpeg";

const RitualDamaDescription = React.lazy(() =>
  import("../components/v2/curso/RitualDamaDescription")
);
// const RitualFimAnoDescription = React.lazy(() =>
//   import("../components/v2/curso/RitualFimAnoDescription")
// );

export default [
  // {
  //   id: "ritual-fim-ano",
  //   img: ritual-fim-ano,
  //   name: "Ritual de Abertura de Caminhos",
  //   cite: "Participe do nosso ritual especial ...",
  //   link: "/rituais/ritual-fim-ano",
  //   Desc: RitualFimAnoDescription,
  // },
  {
    id: "ritual-dama",
    img: ritualdama,
    name: "Ritual de Defuntaria",
    nameFull: "Ritual de Defuntaria da Dama da Noite",
    cite: "Ritual de Defuntaria da Dama da Noite ...",
    link: "/rituais/defuntaria-dama-da-noite",
    Desc: RitualDamaDescription,
  },
];
