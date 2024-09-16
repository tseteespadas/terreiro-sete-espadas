import React from "react";

import Section from "../../../components/v2/conteiners/Section";
import { EventPresentation } from "../../../components/v2/conteiners/Presentation";

import img from "../../../assets/cursos/desenvolvimento.jpeg";
import imgSm from "../../../assets/cursos/desenvolvimento.jpeg";
import { theme } from "../../../styles/theme";

export default function Evento() {
  return (
    <Section id="desenvolvimento" bgColor={theme.colors.black}>
      <EventPresentation
        titleAlign="right"
        txtColor={theme.colors.white}
      ></EventPresentation>
    </Section>
  );
}
