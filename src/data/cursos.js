import React from "react";

import desenvolvimento from "../assets/cursos/desenvolvimento.jpeg";
import teologia from "../assets/cursos/teologia.jpg";
import zepelintracurso from "../assets/cursos/zepelintracurso.jpg";

const DesenvolvimentoDescription = React.lazy(() =>
  import("../components/v2/curso/DesenvolvimentoDescription")
);
const UmbandaDescription = React.lazy(() =>
  import("../components/v2/curso/UmbandaDescription")
);
const ZePelintraDescription = React.lazy(() =>
  import("../components/v2/curso/ZePelintraDescription")
);

export default [
  {
    id: "curso-desenvolvimento",
    img: desenvolvimento,
    name: "Desenvolvimento de Terreiro",
    cite: "O desenvolvimento não se resume em  ...",
    link: "/cursos/desenvolvimento",
    Desc: DesenvolvimentoDescription,
  },
  {
    id: "curso-umbanda",
    img: teologia,
    name: "Umbanda",
    cite: "Umbanda é coisa séria para gente séria! ...",
    link: "/cursos/umbanda",
    Desc: UmbandaDescription,
  },
  {
    id: "curso-ze",
    img: zepelintracurso,
    name: "Zé Pelintra",
    cite: "De mestre da Jurema aos morros cariocas ...",
    link: "/cursos/zepelintra",
    Desc: ZePelintraDescription,
  },
];
