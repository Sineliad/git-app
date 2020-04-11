const initialState = {
  user: {},
};

function user(state = initialState, action: any) {
  switch (action.type) {
    case "GET_USER":
      console.log("GET_USER: ", action);
      return { ...state, user: action.data };
    default:
      return state;
  }
}

export default user;
