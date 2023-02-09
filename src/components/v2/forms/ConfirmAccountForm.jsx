import React, { useState, useCallback } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomAlert from "../alert/CustomAlert";
import Logo from "../logo/Logo";

const FormWrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
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

export default function ConfirmAccountForm(props) {
  const { handleSubmit, loading, errorMessage, setErrorMessage } = props;
  const [passwordError, setPasswordError] = useState(null);

  const clearErrorMessages = useCallback(() => {
    setErrorMessage(null)
  }, [setErrorMessage])
  const checkPassword = useCallback((e) => {
    const pwRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*[-+_!@#$%^&*.,?])|(?=.*_))^[^ ]+$/;
    if (!pwRegex.test(e.target.value)) {
      setPasswordError("Sua senha precisa conter ao menos uma letra maiúscula, uma minúscula, um dígito e um caractere especial.")
    } else if (e.target.value.length < 8) {
      setPasswordError("Sua senha precisa conter ao menos 8 caracteres.")
    } else {
      setPasswordError(null);
    }
  }, [])

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Logo logoType="white" />
        {errorMessage ? (
          <CustomAlert variant="danger" dismissible={true}>
            <p>{errorMessage}</p>
          </CustomAlert>
        ) : null}
        {passwordError ? (
          <CustomAlert variant="warning" dismissible={true}>
            <p>{passwordError}</p>
          </CustomAlert>
        ) : null}
        <Form.Group controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder=""
            onBlur={checkPassword}
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirme sua senha</Form.Label>
          <Form.Control
            required
            type="password"
            onFocus={clearErrorMessages}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!!loading || !!errorMessage || !!passwordError}>
          {loading ? (
            <FontAwesomeIcon icon={["fas", "spinner"]} spin={true} speed={10} />
          ) : (
            "Confirmar minha conta"
          )}
        </Button>
      </StyledForm>
    </FormWrapper>
  );
}
