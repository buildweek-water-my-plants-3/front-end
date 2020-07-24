import React from 'react'
import '../styles.css'
import { Switch, Route, Link } from 'react-router-dom'
import Logout from './Logout'
import Account from './Account'
import Register from './Register'
import Login from './Login'
import PrivateRoute from '../utils/PrivateRoute'

let id = localStorage.getItem('userID');

function App() {
  return (
    <div className='container'>
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to="/Account">Account</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/logout'>Logout</Link>
      </div>

      <Switch>
        <Route path='/logout'>
          <Logout />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path="/Account" component={Account} />
        <Route path='/'>
          <h1>Welcome to Water My Plants</h1>
          <p>This app is an example of using React to interact with data on
          restricted routes in Node (backend) that are using JWTs and cookies. Look through the <a href='https://github.com/tommyconner96/starter-bw-frontend'>Frontend repo</a>. <br />
           Make note of how the axios requests are passed with credentials and a token. I also used
           PrivateRoute.js in the utils folder which I copied from one of my React projects and you
           all have probably used something like that before.<br />
           For testing the functionality, existing users are 'test1', 'test2', and 'test3'. All the passwords are 'password' because
            security is very important. Authenticated users can see a list of Coffees under the /coffee route (linked above)
            <br />
            Also feel free to look through the <a href='https://github.com/tommyconner96/starter-bw'>Backend repo</a>. <br />
          </p>
        </Route>
      </Switch>
    </div>
  )
}

export default App