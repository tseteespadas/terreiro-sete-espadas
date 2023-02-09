import React from "react";
import styled from "styled-components";

const TextInputConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2em 0;

  label {
    color: ${props => props.theme.colors.white1};
    font-size: 0.8rem;
    
    @media (min-width: 830px) {
      font-size: 1rem;
    }
  }

  input {
    width: 75%;
    background-color: transparent;
    border-bottom: 1px solid ${props => props.theme.colors.white1};
    color: ${props => props.theme.colors.white1};
    text-align: center;
    font-size: 0.8rem;
    
    @media (min-width: 830px) {
      font-size: 1rem;
    }
  }
`;


export default function CalendarTextInput(props) {
  const { handleChange, label, id, defaultValue, disabled } = props;
  return (
    <TextInputConteiner>
      <label htmlFor={id}>{label}</label>
      <input type="text" required id={id} defaultValue={defaultValue} disabled={disabled} onChange={handleChange} />
    </TextInputConteiner>
  );
}
