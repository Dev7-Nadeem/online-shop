import { LOGIN } from "../actions/types";
import fetchStates from "./fetchStates";

const DEFAULT_LOGIN = {
  token: "",
  loginStatus: false,
  userName: "",
  fetchState: fetchStates.error,
};

const loginReducer = (state = DEFAULT_LOGIN, action) => {
  switch (action.type) {
    case LOGIN.FETCH_SUCCESS: {
      return {
        ...state,
        token: action.token,
        fetchState: fetchStates.success,
        loginStatus: true,
        userName: action.userName,
      };
    }
    case LOGIN.LOGOUT:
    case LOGIN.FETCH_ERROR: {
      window.sessionStorage.removeItem("token");
      return {
        ...state,
        DEFAULT_LOGIN,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
