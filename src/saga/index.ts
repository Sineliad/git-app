import { takeLatest, put, call } from "redux-saga/effects";
import { getRepos, getReposSuccess, getReposFail } from "../redux/actions";
import request from "../utils/request";
import ActionTypes from "../redux/constants";
import { ActionType } from "typesafe-actions";

type AppActions = ActionType<typeof getRepos>;

export function* getReposWithFetch(action: AppActions) {
  console.log("payload:", action);
  console.log("getRepos saga username: ", action.payload.username);
  const requestURL = `https://api.github.com/users/${action.payload.username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(getReposSuccess(repos));
  } catch (err) {
    yield put(getReposFail(err));
  }
}

export function* watchGetRepos() {
  // Watches for GET_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  yield takeLatest(ActionTypes.GET_REPOS, getReposWithFetch);
}
