import React from "react";
import Section from "../../components/v2/conteiners/Section";
import Mosaic from "../../components/v2/conteiners/Mosaic";

import images from "../../assets/sessao-fotos";
import { theme } from "../../styles/theme";

export default function Galeria() {
  console.log(images);
  return (
    <Section className="pd-bottom" bgColor={theme.colors.black}>
      <Mosaic>
        <h2>Galeria</h2>
        <div className="galeria-description">
          {images.src.map((img) => (
            <a
              key={img}
              href={img}
              className={img.search("span-2") !== -1 ? "span-2" : ""}
              target="_blank"
            >
              <img src={img} alt="imagem" />
            </a>
          ))}
        </div>
      </Mosaic>
    </Section>
  );
}
