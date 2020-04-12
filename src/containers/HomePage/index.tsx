import React, { useState } from "react";
import RepoForm from "../../components/RepoForm";

function HomePage() {
  const [username, setUsername] = useState("");
  const onSubmitForm = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    console.log("username: ", username);
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
