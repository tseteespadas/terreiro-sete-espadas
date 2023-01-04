import styled from "styled-components";

const TermosInfoConteiner = styled.div`
`;

export default function TermosGira() {

  const handleClickPoliticaDePrivacidade = (e) => {
    e.preventDefault();
    const politicaEl = document.getElementById("politica-de-privacidade");
    politicaEl.click();
  }

  return (
    <TermosInfoConteiner>
      <h2>Informações importantes:</h2>
      <p>
        A Comunidade Ògún Onirê está retomando as giras públicas.
        <br />
        Devido à pandemia, estamos limitando a quantidade de giras públicas e
        adotando medidas sanitárias para para garantir a maior segurança de
        todes.
      </p>
      <p>
        <strong>Política de Privacidade: </strong>
        Abaixo encontra-se o formulário de inscrições para receber notificações exclusivas sobre novas giras públicas e rituais.
        Confira a nossa <a href="#" onClick={handleClickPoliticaDePrivacidade}>Política de Privacidade</a>.
      </p>
      <p>
      Lembre-se de seguir as recomendações sanitárias em vigência para garantir a sua segurança e a de todes presentes na gira.
      </p>
    </TermosInfoConteiner>
  );
}
