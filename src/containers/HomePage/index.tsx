import React, { useState } from "react";
import RepoForm from "../../components/RepoForm";
import { useDispatch } from "react-redux";
import { getRepos } from "../../redux/actions";

function HomePage() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
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
      />
    </>
  );
}

export default HomePage;
