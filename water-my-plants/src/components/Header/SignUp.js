import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Route, useHistory } from "react-router-dom";
import Register from "./Register";
import { useResetRecoilState } from "recoil";
import {
  userState,
  passwordState,
  plantState,
  idState,
  phoneNumberState,
} from "../Store/States";
import { HandleLogOut } from "./LogoutPromo";

const SignUpBanner = styled.div`
  background-color: #0dca71;
  min-width: 12rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  margin-right: calc(-2rem);
  color: white;
  box-shadow: 6px 6px 0px #555555;
  font-family: roboto;

  &&:hover {
    background-color: #0bb565;
    right: 3rem;
    margin-top: 5px;
    box-shadow: 3px 3px 0px #555555;
  }

  span {
    font-size: 1.2rem;
  }

  button {
    width: 100%;
    margin-top: -1rem;
    background-color: transparent;
    border: 0;
    color: white;
    font-size: 1.2rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
  }

  a {
    width: 100%;
    min-height: 100%;
    margin: auto;
    margin-top: 0.5rem;
  }
`;
export default function SignUp() {
  const resetState = useResetRecoilState(
    userState,
    passwordState,
    plantState,
    idState,
    phoneNumberState
  );

  return (
    <SignUpBanner>
      <Route exact path="/">
        <a href="/register">
          <button>Signup</button>
        </a>
      </Route>

      <Route path="/(register|login)">
        <a href="/register">
          <button>Signup</button>
        </a>
      </Route>

      <Route path="/(account|settings)">
        <a href="/Login">
          <button onClick={HandleLogOut()}>Logout</button>
        </a>
      </Route>
    </SignUpBanner>
  );
}
