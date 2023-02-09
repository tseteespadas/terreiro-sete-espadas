import styled from "styled-components";

export const DashboardCardConteiner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  height: 100%;
  
  @media (min-width: 830px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 80rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const DashboardConteiner = styled.div`
  width: 100vw;
  height: 100%;
  display: grid;
  place-content: center;
  padding: 2rem;
  position: relative;
`;


export default DashboardConteiner;
