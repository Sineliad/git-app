export function getUser(data: any) {
  return {
    type: "GET_USER",
    data,
  };
}

export function getRepos(data: any) {
  return {
    type: "GET_REPOS",
    data,
  };
}
