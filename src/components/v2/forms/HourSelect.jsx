import React from "react";
import styled from "styled-components";

const HourSelectConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2em 0;

  label {
    color: ${(props) => props.theme.colors.white1};
    font-size: 0.8rem;

    @media (min-width: 830px) {
      font-size: 1rem;
    }
  }

  select {
    width: 75%;
    background-color: transparent;
    border-bottom: 1px solid ${(props) => props.theme.colors.white1};
    color: ${(props) => props.theme.colors.white1};
    text-align: center;

    font-size: 0.8rem;

    @media (min-width: 830px) {
      font-size: 1rem;
    }
    option {
      color: ${(props) => props.theme.colors.black1};
      font-size: 0.8rem;

      @media (min-width: 830px) {
        font-size: 1rem;
      }
    }
  }
`;

export default function CalendarEventSelect(props) {
  const { handleSelect, label, id, defaultValue, disabled } = props;
  return (
    <HourSelectConteiner>
      <label htmlFor={id}>{label}</label>
      <select id={id} onChange={handleSelect} disabled={disabled}>
        <option selected={defaultValue === 0} value="0">
          0:00
        </option>
        <option selected={defaultValue === 1} value="1">
          1:00
        </option>
        <option selected={defaultValue === 2} value="2">
          2:00
        </option>
        <option selected={defaultValue === 3} value="3">
          3:00
        </option>
        <option selected={defaultValue === 4} value="4">
          4:00
        </option>
        <option selected={defaultValue === 5} value="5">
          5:00
        </option>
        <option selected={defaultValue === 6} value="6">
          6:00
        </option>
        <option selected={defaultValue === 7} value="7">
          7:00
        </option>
        <option selected={defaultValue === 8} value="8">
          8:00
        </option>
        <option selected={defaultValue === 9} value="9">
          9:00
        </option>
        <option selected={defaultValue === 10} value="10">
          10:00
        </option>
        <option selected={defaultValue === 11} value="11">
          11:00
        </option>
        <option selected={defaultValue === 12} value="12">
          12:00
        </option>
        <option selected={defaultValue === 13} value="13">
          13:00
        </option>
        <option selected={defaultValue === 14} value="14">
          14:00
        </option>
        <option selected={defaultValue === 15} value="15">
          15:00
        </option>
        <option selected={defaultValue === 16} value="16">
          16:00
        </option>
        <option selected={defaultValue === 17} value="17">
          17:00
        </option>
        <option selected={defaultValue === 18} value="18">
          18:00
        </option>
        <option selected={defaultValue === 19} value="19">
          19:00
        </option>
        <option selected={defaultValue === 20} value="20">
          20:00
        </option>
        <option selected={defaultValue === 21} value="21">
          21:00
        </option>
        <option selected={defaultValue === 22} value="22">
          22:00
        </option>
        <option selected={defaultValue === 23} value="23">
          23:00
        </option>
        <option selected={defaultValue === 24} value="24">
          24:00
        </option>
      </select>
    </HourSelectConteiner>
  );
}
