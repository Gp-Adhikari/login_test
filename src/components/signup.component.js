import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { URL } from "../URL";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [csrfToken, setcsrfToken] = useState("");

  const getCallToForm = async () => {
    const path = "/";

    let fetchGetResponse = await fetch(`${URL}${path}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      mode: "cors",
    });

    let parsedResponse = await fetchGetResponse.json();
    console.log(parsedResponse);
    setcsrfToken(parsedResponse.csrfToken);
  };

  useEffect(() => {
    getCallToForm();
  }, []);

  const submit = async (username, email, password, confirmPassword) => {
    // console.log(username, email, password, confirmPassword);

    let fetchPostResponse = await fetch(URL + "/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "xsrf-token": `${csrfToken}`,
      },
      credentials: "include",
      mode: "cors",

      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      }),
    });
    let parsedResponse = await fetchPostResponse.json();
    console.log(parsedResponse);
  };

  return (
    <>
      <h1>Signup</h1>
      <div className="authentication-desc">
        <p>Already have an Account?</p>
        <Link to="/">Login.</Link>
      </div>

      <form>
        <div className="input-field">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-field">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={() => submit(username, email, password, confirmPassword)}
        >
          Signup
        </button>
      </form>
    </>
  );
};

export default SignUp;
