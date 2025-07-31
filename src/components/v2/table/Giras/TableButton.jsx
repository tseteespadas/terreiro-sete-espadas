import styled from "styled-components";

export const TableButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  line-height: 1;
  background-color: ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  height: auto;
  width: auto;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkblue};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.blue};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.blue};
  }
`;
