const signinInitialState = {
  loggedIn: "Pending",
  loading: false,
  userDetails: {},
  error: "",
};

const signinReducer = (state = signinInitialState, action) => {
  switch (action.type) {
    case "signin-started":
      return { ...state, loggedIn: "Pending", loading: true, error: "" };
    case "signin-success":
      return {
        ...state,
        loggedIn: "Success",
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case "signin-failed":
      return {
        ...state,
        loggedIn: "Failed",
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signinReducer;
