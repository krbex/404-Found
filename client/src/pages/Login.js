import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [Login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await Login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
      document.location.replace('/profile');
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <form className= "loginForm" onSubmit={handleFormSubmit}>
      <h2 className="topHeader">WELCOME BACK</h2>
        <div className="emailIn">
          <label htmlFor="email"></label>
          <input
            className="emailStl" placeholder="Enter Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="passIn">
          <label htmlFor="pwd"></label>
          <input
            className="pwdStl"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The password is incorrect</p>
          </div>
        ) : null}
        <div className="submitBtn">
          <button className="lBtn" type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
