import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";

export interface Props {
  onSubmit(): void;
  username?: string;
  onChangeUsername(): void;
  loading: boolean;
}

function RepoForm(props: Props) {
  return (
    <>
      <Form onSubmit={props.onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Obtener Repositorios de Git de @</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="Git username"
            value={props.username}
            onChange={props.onChangeUsername}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={props.loading}>
          {props.loading && (
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          Enviar
        </Button>
      </Form>
    </>
  );
}

export default RepoForm;
