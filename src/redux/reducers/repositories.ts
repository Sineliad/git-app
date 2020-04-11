const initialState = {
  repos: [],
};

function repositories(state = initialState, action: any) {
  switch (action.type) {
    case "GET_REPOS":
      console.log("GET_REPOS: ", action);
      return { ...state, repos: action.data };
    default:
      return state;
  }
}

export default repositories;
