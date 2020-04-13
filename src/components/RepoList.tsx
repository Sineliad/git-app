import React from "react";
import { ListGroup } from "react-bootstrap";
import { Repo } from "../types";

export interface Props {
  loading: boolean;
  error?: object | boolean;
  repos: Repo[];
}

function RepoForm(props: Props) {
  return (
    <>
      <ListGroup variant="flush">
        {props.repos &&
          props.repos.map((repo) => (
            <ListGroup.Item style={{ color: "black" }} key={repo.name}>
              {repo.full_name}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
}

export default RepoForm;
