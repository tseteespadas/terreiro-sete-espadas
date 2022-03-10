import styled from "styled-components";

const TermosInfoConteiner = styled.div`
  ol > li {
    margin-left: 1.5rem;
  }
`;

export default function TermosGira() {
  return (
    <TermosInfoConteiner>
      <h2>Informações importantes:</h2>
      <p>
        O Terreiro Sete Espadas está retomando as giras públicas.
        <br />
        Devido à pandemia, estamos limitando a quantidade de pessoas nas giras e
        adotando medidas sanitárias para para garantir a maior segurança de
        todes.
      </p>
      <p>
        Leia com atenção os termos de inscrição e comparecimento à seguir. O não
        cumprimento dos termos nos espaços públicos do terreiro acarretará no
        cancelamento da inscrição e banimento das giras públicas.
      </p>
      <p>
        <strong>Das inscrições:</strong>
      </p>
      <ol type="I">
        <li>
          A inscrição para a gira é obrigatória para todes aqueles que desejam
          comparecer à gira.
        </li>
        <li>
          A inscrição é pessoal, única e intransferível. Será barrada a entrada
          de qualquer pessoa sem inscrição válida na gira corrente.
        </li>
        <li>
          O único meio de se inscrever para a gira é pelo formulário
          disponibilizado nessa página. Qualquer mudança nesse processo será
          comunicada via nossas redes sociais.
        </li>
        <li>
          O cancelamento da inscrição deverá ser realizado via nossos canais de
          comunicação oficiais.
        </li>
        <li>
          Cada gira poderá ter diferentes limites de pessoas na assistência e a
          mudança poderá ocorrer a qualquer momento, sem aviso prévio.
        </li>
        <li>
          A data limite de inscrição para a gira corrente é até às 23:59 do dia
          anterior ao dia da gira e/ou até o atingimento do limite de público
          permitido.
        </li>
      </ol>
      <p>
        <strong>Da gira:</strong>
      </p>
      <ol type="I">
        <li>
          O horário de início das giras é 16h00. O portão para o público abrirá
          à partir das 15h30 e fechará às 16h20.
        </li>
        <li>
          É obrigatório o uso de máscara por parte da assistência durante toda a
          permanência no terreiro.
        </li>
        <li>
          É obrigatória a apresentação do Certificado Nacional de Vacinação
          COVID-19 na entrada do terreiro. Será barrada a entrada de qualquer
          pessoa sem o comprovante de vacinação até, no mínimo, a segunda dose.
          <br />
          Caso não tenha o certificado impresso, é possível visualiza-lo pelo
          aplicativo ou portal{" "}
          <a
            href="https://conectesus-paciente.saude.gov.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conecte-Sus
          </a>
        </li>
        <li>
          No terreiro será fornecido álcool em gel, mas encorajamos que todes da
          assistência tragam os seus próprios.
        </li>
      </ol>
    </TermosInfoConteiner>
  );
}
