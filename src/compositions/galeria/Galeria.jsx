import React from "react";
import Section from "../../components/v2/conteiners/Section";
import Mosaic from "../../components/v2/conteiners/Mosaic";

import images from "../../assets/sessao-fotos";

export default function Galeria() {
  return (
    <Section className="pd-bottom bg-black">
      <Mosaic>
        <h2>Galeria</h2>
        <div className="galeria-description">
          {images.src.map((img) => (
            <a
              key={Math.random()}
              href={img.default}
              className={img.default.search("span-2") !== -1 ? "span-2" : ""}
              target="_blank"
            >
              <img key={Math.random()} src={img.default} alt="imagem" />
            </a>
          ))}
        </div>
      </Mosaic>
    </Section>
  );
}
