import React from "react";
import styled from "styled-components";

const TextAreaConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2em 0 0.75em;

  label {
    color: ${(props) => props.theme.colors.white1};

    font-size: 0.8rem;
    @media (min-width: 830px) {
      font-size: 1rem;
    }
  }

  textarea {
    width: 100%;
    background-color: 1px solid ${(props) => props.theme.colors.white1};
    color: ${(props) => props.theme.colors.black1};

    font-size: 0.8rem;

    @media (min-width: 830px) {
      font-size: 1rem;
    }
  }
`;

export default function CalendarTextArea(props) {
  const { handleChange, label, id, defaultValue, disabled } = props;
  return (
    <TextAreaConteiner>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} defaultValue={defaultValue} disabled={disabled} onChange={handleChange} />
    </TextAreaConteiner>
  );
}
