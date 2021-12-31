import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <div className="authentication-desc">
        <p>Don't have an Account?</p>
        <Link to="/signup">Create an Account.</Link>
      </div>

      <form>
        <div className="input-field">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input type="password" />
        </div>

        <button type="button">Login</button>
      </form>
    </>
  );
};

export default Login;
