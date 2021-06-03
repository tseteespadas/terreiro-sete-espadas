import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormInscricao(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Seu email" />
        <Form.Text className="text-muted">
          Insira um email válido, pois entraremos em contato com você por ele!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formNome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Seu nome completo" />
      </Form.Group>

      <Form.Group controlId="formRG">
        <Form.Label>RG</Form.Label>
        <Form.Control type="text" placeholder="Seu RG" />
        <Form.Text className="text-muted">
          Suas informações são confidenciais e serão utilizadas apenas para a inscrição no curso.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
