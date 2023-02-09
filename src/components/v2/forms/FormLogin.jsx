import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomAlert from "../alert/CustomAlert";
import Logo from "../logo/Logo";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.black};
  width: 100%;
  height: 100vh;

  @media (min-width: 650px) {
    flex-direction: row;
  }
  .welcome {
    margin-top: 2rem;
    max-width: 320px;
    @media (min-width: 650px) {
      margin: 0rem;
      flex-direction: row;
    }
    p {
      color: ${props => props.theme.colors.white};
      margin-bottom: 0.5em;
      padding: 1em;
      text-align: center;
      &:last-child {
        margin-bottom: 2rem;
      }
    }

    a {
      color: ${props => props.theme.colors.red};
    }
  }
`;

const StyledForm = styled(Form)`
  max-width: 320px;
  border-radius: 0.5rem;
  padding: 1em;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    max-width: 450px;
  }
  & > div {
    margin-bottom: 2em;
  }
  
  button {
    background-color: ${props => props.theme.colors.green};
    border-color: ${props => props.theme.colors.green};
    outline: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.blue};
      border-color: ${props => props.theme.colors.blue};
      outline: ${props => props.theme.colors.blue};
    }
  }
`;

export default function FormLogin(props) {
  const { handleSubmit, loading, errorMessage } = props;
  return (
    <FormWrapper>
      <div className="welcome">
        <p>Bem vinde à área logada da Comunidade Ògún Onirê.</p>
        <p>
          Essa área é reservada apenas para membros da comunidade. Caso tenha acessado essa área
          por engano, clique <a href="/">aqui</a> para retornar para a home page.
        </p>
      </div>
      <StyledForm onSubmit={handleSubmit}>
        <Logo logoType="white" />
        {errorMessage ? (
          <CustomAlert variant="danger" dismissible={true}>
            {errorMessage}
          </CustomAlert>
        ) : null}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            pattern='^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
            type="email"
            placeholder="email@email.com"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control required type="password" />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? <FontAwesomeIcon icon={["fas", "spinner"]} spin={true} speed={10} /> : "Entrar"}
        </Button>
      </StyledForm>
    </FormWrapper>
  );
}
