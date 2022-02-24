import React from "react";
import styled from "styled-components";

const PresentationConteiner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    display: flex;
    flex-direction: column;
    max-width: 1400px;

    &.reverse {
      flex-direction: column-reverse;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
      object-fit: cover;
      margin-bottom: 2em;
    }

    h2 {
      position: relative;
      font-size: 2em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${(props) => props.theme.colors.darkblue4};
      text-align: ${(props) => props.titleAlign};
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
        left: 0;
        right: 0;
        border-bottom: 2px solid ${(props) => props.theme.colors.darkblue4};
      }
    }

    p {
      letter-spacing: 0.015em;
      font-size: 1.25rem;
      margin-bottom: 1.5em;
    }

    p.align-center {
      text-align: center;
    }

    p.italic {
      font-style: italic;
    }
  }

  .description > div {
    margin-top: 2.5em;
  }

  @media (min-width: 1100px) {
    .description {
      flex-direction: row !important;
    }

    .description p {
      text-align: justify;
      text-justify: inter-word;
    }

    .description div {
      min-width: 48%;
    }

    .description img {
      max-width: 50%;
      margin: 0;
    }

    .description > div {
      margin-top: 0;
    }

    .description > * {
      flex-basis: 100%;
    }

    .description > .content.pd-left {
      padding: 0 0 0 2em;
    }
    .description > .content.pd-right {
      padding: 0 2em 0 0;
    }
  }
`;

const PresentationUniformConteiner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    display: flex;
    flex-direction: column;
    width: min(100%, 50em);

    h2 {
      position: relative;
      font-size: 2em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${(props) =>
        props.colorsPreset === "light"
          ? props.theme.colors.white1
          : props.theme.colors.darkblue2};
      text-align: center;
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
        left: 0;
        right: 0;
        border-bottom: 2px solid
          ${(props) =>
            props.colorsPreset === "light"
              ? props.theme.colors.white2
              : props.theme.colors.darkblue3};
      }
    }

    img {
      display: block;
      margin: auto;
    }

    h3 {
      font-size: 1.75em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${(props) =>
        props.colorsPreset === "light"
          ? props.theme.colors.white1
          : props.theme.colors.darkblue2};
      text-align: center;
    }

    p {
      color: ${(props) =>
        props.colorsPreset === "light"
          ? "white"
          : props.theme.colors.darkblue2};
      display: flex;
      flex-direction: column;
      letter-spacing: 0.015em;
      font-size: 1.25rem;
    }

    p cite {
      font-size: 1.2em;
      font-weight: bold;
      text-align: center;
      font-family: Confortaa;
    }
    p small {
      margin-top: 1em;
      font-size: 0.8em;
      text-align: center;
      font-family: Comfortaa;
    }
    
    .t-center {
      display: block;
      text-align: center;
    }
    .underline {
      text-decoration: underline;
    }

    .btn {
      align-self: center;
      width: fit-content;
      padding: 0.75em 1.25em;
      background-color: #007bff;
      color: white;
      border-radius: 0.5em;
    }
  }
`;

export default function Presentation(props) {
  const { children } = props;
  return (
    <PresentationConteiner>
      <div className="description">{children}</div>
    </PresentationConteiner>
  );
}

export function PresentationUniform(props) {
  const { children, colorsPreset } = props;
  return (
    <PresentationUniformConteiner colorsPreset={colorsPreset || "light"}>
      <div className="description">{children}</div>
    </PresentationUniformConteiner>
  );
}
