import { action } from "typesafe-actions";
import { Repo } from "../../types";

export const getRepos = (username: string) => action("GET_REPOS", { username });

export const getReposSuccess = (repos: Repo) =>
  action("GET_REPOS_SUCCESS", { repos });

export const getReposFail = (error: object) =>
  action("GET_REPOS_FAIL", { error });
