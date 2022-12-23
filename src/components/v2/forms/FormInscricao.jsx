import React, { useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

import correiosAPI from "../../../services/correios";

const StyledForm = styled(Form)`
  & > div {
    margin-bottom: 2em;
  }
`;

export default function FormInscricao(props) {
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  async function handleCEPBlur(e) {
    const cep = e.target.value;
    if (cep && cep.length === 8) {
      try {
        const { data } = await correiosAPI.get(`/${cep.replace("-", "")}/json`);
        if (!data.error) {
          setNeighborhood(data.bairro)
          setAddress(data.logradouro)
          setCity(data.localidade)
        }
      } catch (e) {
        console.log(e);
        alert("O CEP informado não existe")
      }
    }
  }

  const handleClickPoliticaDePrivacidade = (e) => {
    e.preventDefault();
    const politicaEl = document.getElementById("politica-de-privacidade");
    politicaEl.click();
  };

  return (
    <StyledForm onSubmit={props.handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nome</Form.Label>
        <Form.Control required type="text" placeholder="Seu nome completo" />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
          type="email"
          placeholder="Seu email"
        />
        <Form.Text className="text-muted">
          Insira um email válido, pois entraremos em contato com você por ele!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control
          required
          type="text"
          pattern="([1-9]{2})(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$"
          placeholder="Número para contato"
        />
        <Form.Text className="text-muted">
          Digite apenas números, informando o DDD.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formGender">
        <Form.Label>Identidade de Gênero</Form.Label>
        <Form.Select aria-label="Gênero">
          <option>Selecione sua identidade de gênero</option>
          <option value="mulher cisgênero">Mulher (cisgênero)</option>
          <option value="homem cisgênero">Homem (cisgênero)</option>
          <option value="mulher transgênero">Mulher (transgênero)</option>
          <option value="homem transgênero">Homem (transgênero)</option>
          <option value="transmasculino">Transmasculino</option>
          <option value="transfeminina">Transfeminina</option>
          <option value="não-binário">Não-binárie</option>
          <option value="agênero">Agênero</option>
        </Form.Select>
        <Form.Label>Outro: </Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">
          Não se identifica com nenhuma das opções acima? Nos conte com qual
          identidade de gênero você se identifica!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPronoums">
        <Form.Label>Pronomes</Form.Label>
        <Form.Check data-value="Ele/Dele" label="Ele/Dele" />
        <Form.Check data-value="Ela/Dela" label="Ela/Dela" />
        <Form.Check data-value="Elu/Delu" label="Elu/Delu" />
        <Form.Text className="text-muted">
          Selecione seu(s) o(s) pronome(s).
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formCep">
        <Form.Label>CEP</Form.Label>
        <Form.Control
          required
          type="text"
          pattern="[0-9]{8}"
          placeholder="00000000"
          onBlur={handleCEPBlur}
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Endereço</Form.Label>
        <Form.Control
          required
          type="text"
          value={address}
          disabled
        />
      </Form.Group>

      <Form.Group controlId="formNumber">
        <Form.Label>Número</Form.Label>
        <Form.Control
          required
          type="number"
          min="0"
          max="99999"
        />
      </Form.Group>

      <Form.Group controlId="formNeighborhood">
        <Form.Label>Bairro</Form.Label>
        <Form.Control
          required
          type="text"
          value={neighborhood}
          disabled
        />
      </Form.Group>
      <Form.Group controlId="formCity">
        <Form.Label>Cidade</Form.Label>
        <Form.Control
          required
          type="text"
          value={city}
          disabled
        />
      </Form.Group>
      <Form.Group>
        <Form.Text className="text-muted">
          Ao clicar em <strong>Inscrever-me</strong>, você concorda com a nossa
          <a href="#" onClick={handleClickPoliticaDePrivacidade}>
            {" "}
            Política de Privacidade
          </a>
          .
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Inscrever-me
      </Button>
    </StyledForm>
  );
}
