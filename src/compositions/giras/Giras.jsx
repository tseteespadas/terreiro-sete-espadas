import styled from "styled-components";

import Section from "../../components/v2/conteiners/Section";
import ProxGiraInfo from "../../components/v2/giras/ProxGiraInfo";
import TermosGira from "../../components/v2/giras/TermosGira";

const GirasConteiner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  justify-content: center;
  margin: 2rem auto;
`;

export default function Giras() {
  return (
    <Section>
      <GirasConteiner>
        <TermosGira />
        <ProxGiraInfo />
      </GirasConteiner>
    </Section>
  );
}
