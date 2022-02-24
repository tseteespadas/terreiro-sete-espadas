import styled from "styled-components";

export default styled.section`
  position: relative;
  padding: 0 3rem;
  height: auto;
  width: auto;

  &.pd-bottom {
    padding-bottom: 3rem;
  }

  &.pd-top {
    padding-top: 3rem;
  }

  &.bg-white {
    background-color: ${(props) => props.theme.colors.white2};
  }

  &.bg-black {
    background-color: ${(props) => props.theme.colors.black1};
  }

  &.bg-darkblue {
    background-color: ${props => props.theme.colors.darkblue3};
  }
`;
