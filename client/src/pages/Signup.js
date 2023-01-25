import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
    document.location.replace("/profile");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="">
      <Link className="toLogin" to="/login">← GO TO LOGIN</Link>
      <div className="container2">
        <form onSubmit={handleFormSubmit}>
          <div className="signUpStl">
          <h2 className="topHeader">BECOME A GOD</h2>
            <label htmlFor="firstName"></label>
            <input
              className="fName"
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="lastName"></label>
            <input
              className="lName"
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="email"></label>
            <input
              className="emailStl2"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor="pwd"></label>
            <input
              className="pwdSU"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <button className="sbmBtn" type="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
