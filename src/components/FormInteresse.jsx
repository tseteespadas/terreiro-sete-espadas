import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormInteresse(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Seu email" />
        <Form.Text className="text-muted">
          Insira um email válido, pois poderemos entrar em contato com você por ele!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Seu nome completo" />
      </Form.Group>

      <Form.Group controlId="formTel">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="number" placeholder="Número para contato" />
        <Form.Text className="text-muted">
          Digite apenas números, informando o DDD.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Tenho interesse!
      </Button>
    </Form>
  );
}
