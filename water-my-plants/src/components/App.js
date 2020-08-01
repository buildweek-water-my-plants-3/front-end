import React from 'react'
import styled from 'styled-components'
import '../styles.css'
import { Switch, Route, Link } from 'react-router-dom'
import Logout from './Logout'
import Account from './Account'
import Register from './Register/Register'
import Login from './Login/Login'
import PrivateRoute from '../utils/PrivateRoute'
import Header from './Header/Header'
import {RecoilRoot} from 'recoil'
import EditAccount from './EditAccount'

let id = localStorage.getItem('userID');

function App() {

  const App = styled.div
  `
   display: flex;
   flex-direction: column;
   align-items: space-between;
 
   min-height: 100vh;
   max-width: 1200px;
   margin: 0 auto; 
  `

  return (
<>
<RecoilRoot>
  <Header />

  <Route exact path="/">
  <Login />
    </Route>

    <Route exact path="/Account">
        <Account />
    </Route>


    <Route exact path="/Login">
        <Login />
    </Route>


    <Route exact path="/Register">
        <Register />
    </Route>

    <Route path="/Settings" component={EditAccount}/>
</RecoilRoot>
</>
  )
}

export default App
