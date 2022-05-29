const intialState = {
  userInitState: [],
  userFetchSuccess: "",
  userFetchFail: "",
};
const userReducer = (state = intialState, action) => {
  console.log("myaction", action);
  switch (action.type) {
    case "GET_USER_INIT":
      return {
        userInitState: [],
        userFetchSuccess: "",
        userFetchFail: "",
      };

    case "GET_USER_SUCCESS":
      return {
        ...state,
        userInitState: action.payload,
      };
    case "GET_USER_FAIL":
      return {
        userFetchFail: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
