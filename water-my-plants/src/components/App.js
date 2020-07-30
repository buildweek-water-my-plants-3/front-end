import React from "react";
import styled from "styled-components";
import "../styles.css";
import { Switch, Route, Link } from "react-router-dom";
import Logout from "./Logout";
import Account from "./Account";
import Register from "./Register/Register";
import Login from "./Login/Login";
import PrivateRoute from "../utils/PrivateRoute";
import Header from "./Header/Header";
import { RecoilRoot } from "recoil";
import EditAccount from "./EditAccount";

import UpdatePlant from "./UpdatePlant";
import AddPlant from "./AddPlant";

let id = localStorage.getItem("userID");

function App() {
  const App = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;

    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
  `;

  return (

    <>
      <RecoilRoot>
        <Header />
    
       <Switch>
        <PrivateRoute exact path="/Account" component={Account}/>

        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/Register">
          <Register />
        </Route>

        <Route
          path="/edit-plant/:id"
          render={(props) => <UpdatePlant {...props} userId={id} />}
        />

        <Route exact path="/add-plant/:id">
          <AddPlant />
        </Route>

        <PrivateRoute path="/Settings" component={EditAccount} />
       </Switch>
      </RecoilRoot>
    </>
  );

}

export default App;
