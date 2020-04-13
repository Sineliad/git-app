import React, { useState } from "react";
import RepoForm from "../../components/RepoForm";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../../redux/actions";
import RepoList from "../../components/RepoList";
import { Repo } from "../../types";

interface RepoState {
  loading: boolean;
  error?: object | boolean;
  repos: Repo[];
}
interface AppState {
  repositories: RepoState;
}

function HomePage() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const repositories = useSelector((state: AppState) => state.repositories);
  console.log("data: ", repositories);
  const { loading, error, repos } = repositories;

  const onSubmitForm = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    console.log("username: ", username);
    if (!username) {
      return;
    }
    dispatch(getRepos(username));
  };
  const onChangeUsername = (evt?: any) => setUsername(evt.target.value);
  return (
    <>
      <RepoForm
        onSubmit={onSubmitForm}
        username={username}
        onChangeUsername={onChangeUsername}
        loading={loading}
      />
      <br />
      <RepoList loading={loading} error={error} repos={repos} />
    </>
  );
}

export default HomePage;
