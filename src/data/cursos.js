import React from "react";

import desenvolvimento from "../assets/cursos/desenvolvimento.jpeg";
import zepelintracurso from "../assets/cursos/zepelintracurso.jpg";

const DesenvolvimentoDescription = React.lazy(() =>
  import("../components/v2/curso/DesenvolvimentoDescription")
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
    id: "curso-ze",
    img: zepelintracurso,
    name: "Zé Pelintra",
    cite: "De mestre da Jurema aos morros cariocas ...",
    link: "/cursos/zepelintra",
    Desc: ZePelintraDescription,
  },
];
