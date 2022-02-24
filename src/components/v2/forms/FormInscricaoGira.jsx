import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormInscricaoGira(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Seu nome completo" />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Seu email" />
        <Form.Text className="text-muted">
          Insira um email válido, pois entraremos em contato com você por ele!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formPhone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="number" placeholder="Número para contato" />
        <Form.Text className="text-muted">
          Digite apenas números, informando o DDD.
        </Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Text className="text-muted">
          Ao clicar em <strong>Inscrever-me</strong>, você concorda com os
          termos descritos acima. O não cumprimento dos termos dentro ou fora do
          terreiro acarretará no cancelamento da inscrição e na proibição de
          entrada no terreiro.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Inscrever-me
      </Button>
    </Form>
  );
}
