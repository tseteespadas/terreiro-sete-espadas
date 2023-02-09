import React, { useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventGroupConteiner = styled.div`
  width: fit-content;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  
  @media (min-width: 830px) {
    height: 2rem;
  }
  .name {
    margin: 0;
    color: ${(props) => props.theme.colors.white1};
    font-size: 0.8rem;
    
    @media (min-width: 830px) {
      font-size: 1rem;
    }
  }
  .remove {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5em;
    width: 1rem;
    &:hover {
      cursor: pointer;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.gray3};
    }
    .icon {
      color: ${props => props.theme.colors.red};
      font-size: 0.8rem;
      
      @media (min-width: 830px) {
        font-size: 1rem;
      }
    }
  }
`;

export default function EventGroup(props) {
  const { group_id, group_name, handleClickRemoveGroup, allowRemove } = props;

  const handleRemove = useCallback(() => {
    handleClickRemoveGroup(group_id);
  }, [group_id, handleClickRemoveGroup]);

  return (
    <EventGroupConteiner>
      <p className="name">{group_name}</p>
      {allowRemove ? (
        <div className="remove" onClick={handleRemove}>
          <FontAwesomeIcon className="icon" icon={["fas", "times"]} />
        </div>
      ) : null}
    </EventGroupConteiner>
  );
}
