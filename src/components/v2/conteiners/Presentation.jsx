import React from "react";
import styled from "styled-components";

const PresentationConteiner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.red};
  }

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
      color: ${(props) => props.txtColor};
      text-align: ${(props) => props.titleAlign};
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
        left: 0;
        right: 0;
        color: ${(props) => props.txtColor};
      }
    }

    p {
      letter-spacing: 0.015em;
      font-size: 1.25rem;
      margin-bottom: 1.5em;
      color: ${(props) => props.txtColor};

      span.ml-4 {
        margin-left: 1em;
      }
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

  a {
    color: ${(props) => props.theme.colors.red};
  }

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
      color: ${(props) => props.txtColor};
      text-align: center;
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
        left: 0;
        right: 0;
        border-bottom: 2px solid ${(props) => props.txtColor};
      }

      & > .icon {
        margin-left: 0.5em;
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
      color: ${(props) => props.txtColor};
      text-align: center;
    }

    p {
      color: ${(props) => props.txtColor};
      letter-spacing: 0.015em;
      font-size: 1.25rem;

      span.ml-4 {
        margin-left: 1em;
      }
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
      color: ${(props) => props.txtColor};
      border-radius: 0.5em;
    }
  }

  .green {
    color: ${(props) => props.theme.colors.green};
  }

  .blue {
    color: ${(props) => props.theme.colors.blue};
  }

  .red {
    color: ${(props) => props.theme.colors.red};
  }
`;

const EventPresentationConteiner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.red};
  }

  img {
    display: block;
    margin: auto;
    width: 100%;
    padding-bottom: 2rem;

    &.img {
      @media (max-width: 767px) {
        display: none;
      }
    }

    &.img-sm {
      @media (min-width: 768px) {
        display: none;
      }
    }

    &.fixed-width {
      width: 250px;
    }
  }

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
      color: ${(props) => props.txtColor};
      text-align: center;
      &::after {
        position: absolute;
        content: "";
        bottom: -0.0125em;
        left: 0;
        right: 0;
        border-bottom: 2px solid ${(props) => props.txtColor};
      }

      & > .icon {
        margin-left: 0.5em;
      }
    }

    h3 {
      font-size: 1.75em;
      font-weight: 700;
      margin: 1.75em 0;
      letter-spacing: 0.025em;
      color: ${(props) => props.txtColor};
      text-align: center;
    }

    p {
      color: ${(props) => props.txtColor};
      letter-spacing: 0.015em;
      font-size: 1.25rem;

      span.ml-4 {
        margin-left: 1em;
      }
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
      color: ${(props) => props.txtColor};
      border-radius: 0.5em;
    }
  }

  .green {
    color: ${(props) => props.theme.colors.green};
  }

  .blue {
    color: ${(props) => props.theme.colors.blue};
  }

  .red {
    color: ${(props) => props.theme.colors.red};
  }

  .center {
    text-align: center;
  }
`;

export default function Presentation(props) {
  const { children, ...rest } = props;
  return (
    <PresentationConteiner {...rest}>
      <div className="description">{children}</div>
    </PresentationConteiner>
  );
}

export function PresentationUniform(props) {
  const { children, ...rest } = props;
  return (
    <PresentationUniformConteiner {...rest}>
      <div className="description">{children}</div>
    </PresentationUniformConteiner>
  );
}

export function EventPresentation(props) {
  const { children, ...rest } = props;
  return (
    <EventPresentationConteiner {...rest}>
      <div className="description">{children}</div>
    </EventPresentationConteiner>
  );
}
