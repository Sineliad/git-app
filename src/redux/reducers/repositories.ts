import { Repo } from "../../types";
import { ActionType } from "typesafe-actions";
import * as actions from "../actions";
import ActionTypes from "../constants";

type AppActions = ActionType<typeof actions>;

interface AppState {
  readonly loading: boolean;
  readonly error?: object | boolean;
  readonly username: string;
  readonly repos: Repo[];
}

const initialState = {
  loading: false,
  error: false,
  username: "",
  repos: [],
};

function repositories(state: AppState = initialState, action: AppActions) {
  console.log("action: ", action);
  switch (action.type) {
    case ActionTypes.GET_REPOS:
      return {
        ...state,
        username: action.payload.username,
        loading: true,
        error: false,
      };
    case ActionTypes.GET_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload.repos,
        loading: false,
        error: false,
      };
    case ActionTypes.GET_REPOS_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export default repositories;
