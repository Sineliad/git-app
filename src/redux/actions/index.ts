import { action } from "typesafe-actions";
import { Repo } from "../../types";
import ActionTypes from "../constants";

export const getRepos = (username: string) =>
  action(ActionTypes.GET_REPOS, { username });

export const getReposSuccess = (repos: Repo) =>
  action(ActionTypes.GET_REPOS_SUCCESS, { repos });

export const getReposFail = (error: object) =>
  action(ActionTypes.GET_REPOS_FAIL, { error });
