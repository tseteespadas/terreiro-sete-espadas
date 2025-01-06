import React from "react";

import desenvolvimento from "../assets/cursos/desenvolvimento.jpeg";
import zepelintracurso from "../assets/cursos/zepelintracurso.jpg";
import ervascurso from "../assets/cursos/curso-ervas.jpg";
import ritual2025 from "../assets/ritual-fim-de-ano.jpeg";

const DesenvolvimentoDescription = React.lazy(() =>
  import("../components/v2/curso/DesenvolvimentoDescription")
);
const ZePelintraDescription = React.lazy(() =>
  import("../components/v2/curso/ZePelintraDescription")
);
const ErvasDescription = React.lazy(() =>
  import("../components/v2/curso/ErvasDescription")
);
const RitualFimAnoDescription = React.lazy(() =>
  import("../components/v2/curso/RitualFimAnoDescription")
);

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
  // {
  //   id: "curso-ervas",
  //   img: ervascurso,
  //   name: "Ervas",
  //   cite: "O curso de ervas é ministrado ...",
  //   link: "/cursos/ervas",
  //   Desc: ErvasDescription,
  // },
];
