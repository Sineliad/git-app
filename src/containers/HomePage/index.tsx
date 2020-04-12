import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Obtener Repositorios de Git de @</Form.Label>
          <Form.Control size="lg" type="text" placeholder="Git username" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Enviando...
        </Button>
      </Form>
    </>
  );
}

export default HomePage;
