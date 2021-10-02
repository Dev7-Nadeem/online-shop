import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Login.css";

import { fetchLoginToken } from "./../../actions/login";
import { useDispatch, useSelector } from "react-redux";

export default function Login({ setToken }) {
  const dispatch = useDispatch();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      fetchLoginToken({
        username,
        password,
      })
    );
  };

  const loginStatus = useSelector((state) => state.login.loginStatus);
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        {loginStatus && <span>Invalid Username or password</span>}
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
