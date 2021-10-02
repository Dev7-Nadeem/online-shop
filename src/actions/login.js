import { LOGIN } from "./types";

const API_BASE_URL = "https://fakestoreapi.com";

export const fetchLoginToken = (credentials) => (dispatch) => {
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      if (res.status !== 200) throw new console.error("unsuccessful fetch.");
      return res.json();
    })
    .then((token) => {
      console.log(token);
      dispatch({
        type: LOGIN.FETCH_SUCCESS,
        token: token.token,
        userName: credentials.username,
      });
    })
    .catch((err) => dispatch({ type: LOGIN.FETCH_ERROR }));
};

export const logoutUser = (dispatch) => {
  return { type: LOGIN.LOGOUT };
};
