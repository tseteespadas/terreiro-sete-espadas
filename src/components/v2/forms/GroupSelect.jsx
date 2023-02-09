import React from "react";
import styled from "styled-components";

const GroupSelectConteiner = styled.div`
  width: 10rem;
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

export default function CalendarEventGroupSelect(props) {
  const { handleSelect, label, id, groups } = props;
  return (
    <GroupSelectConteiner>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select id={id} onChange={handleSelect}>
        <option value="">Selecione um grupo</option>
        {groups.map(({ group_name, group_id }) => {
          return (
            <option key={`select-${group_id}`} value={group_id}>
              {group_name}
            </option>
          );
        })}
      </select>
    </GroupSelectConteiner>
  );
}
