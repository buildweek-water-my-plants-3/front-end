import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  userState,
  passwordState,
  idState,
  loginState,
  usernameState,
} from "../Store/States";
import FadeIn from "react-fade-in";

const RegisterBox = styled.div`
  border: 3px solid green;
  border-radius: 0.35rem;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  padding: 2rem;

  input {
    display: inline-block;
    min-height: 2rem;
    margin: 0rem 0rem 1rem;
    max-width: 100%;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  border-radius: 0.35rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #0b9444;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: white;
`;

const Title = styled.h1`
  text-align: center;
`;

export default function () {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useRecoilState(userState);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { username, password };
    axios
      .post(
        "https://water-my-plants-server.herokuapp.com/auth/login",
        payload,
        { withCredentials: true }
      )
      .then((res) => {
        console.log("login");
        localStorage.setItem("token", res.data.token);
        console.log(res.data);
        localStorage.setItem("userID", res.data.user_id);
        history.push("/Account");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Title>Login</Title>

      <RegisterBox>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <FadeIn>
          <SubmitButton type="submit">Submit</SubmitButton>
        </FadeIn>
      </RegisterBox>
    </form>
  );
}
