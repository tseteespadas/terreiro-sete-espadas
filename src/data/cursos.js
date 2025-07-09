import React from "react";

import desenvolvimento from "../assets/cursos/desenvolvimento.jpeg";
import zepelintracurso from "../assets/cursos/zepelintracurso.jpg";
import ritualdama from "../assets/ritual-dama-2025.jpeg";
import ervascurso from "../assets/cursos/curso-ervas.jpg";
import ritual2025 from "../assets/ritual-fim-de-ano.jpeg";

const DesenvolvimentoDescription = React.lazy(() =>
  import("../components/v2/curso/DesenvolvimentoDescription")
);
const ZePelintraDescription = React.lazy(() =>
  import("../components/v2/curso/ZePelintraDescription")
);
const RitualDamaDescription = React.lazy(() =>
  import("../components/v2/curso/RitualDamaDescription")
);
// const ErvasDescription = React.lazy(() =>
//   import("../components/v2/curso/ErvasDescription")
// );
// const RitualFimAnoDescription = React.lazy(() =>
//   import("../components/v2/curso/RitualFimAnoDescription")
// );

export default [
  // {
  //   id: "ritual2025",
  //   img: ritual2025,
  //   name: "Ritual de Abertura de Caminhos",
  //   cite: "Participe do nosso ritual especial ...",
  //   link: "/cursos/ritual2025",
  //   Desc: RitualFimAnoDescription,
  // },
  {
    id: "curso-desenvolvimento",
    img: desenvolvimento,
    name: "Desenvolvimento de Terreiro",
    cite: "O desenvolvimento não se resume em  ...",
    link: "/cursos/desenvolvimento",
    Desc: DesenvolvimentoDescription,
  },
  {
    id: "curso-ze",
    img: zepelintracurso,
    name: "Zé Pelintra",
    cite: "De mestre da Jurema aos morros cariocas ...",
    link: "/cursos/zepelintra",
    Desc: ZePelintraDescription,
  },
  {
    id: "ritual-dama",
    img: ritualdama,
    name: "Ritual de Defuntaria",
    cite: "Ritual de Defuntaria da Dama da Noite ...",
    link: "/rituais/defuntaria-dama-da-noite",
    Desc: RitualDamaDescription,
  },
  // {
  //   id: "curso-ervas",
  //   img: ervascurso,
  //   name: "Ervas",
  //   cite: "O curso de ervas é ministrado ...",
  //   link: "/cursos/ervas",
  //   Desc: ErvasDescription,
  // },
];
