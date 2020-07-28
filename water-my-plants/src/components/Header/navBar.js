import React from 'react';
import styled from 'styled-components';
import {Link, Route} from 'react-router-dom';
import "../Header/navLinks.css"






function NavBar() {

    const NavContain = styled.div
    `

    display: flex;
    align-items: space-between;
    justify-content: flex-start;
    margin-left: 1rem;
    margin-top: 5.5rem;
    align-items: center;
    height: 8rem;
    width: 100%;

    `






    return (
        
            <NavContain>



                


                <Route path contains = "/">
                    <Link id="plantsLink" to='/'>Home</Link>
                </Route>




                <Route path = "/(account|settings)">
                    <Link id="plantsLink" to="/Account">Account</Link>
                </Route>

                

                <Route exact path="/">
                    <Link id="plantsLink" to='/register'>Register</Link> 
                </Route>

                <Route path = "/(register|login)">
                    <Link id="plantsLink" to='/register'>Register</Link> 
                </Route>


               

                <Route exact path="/">
                <Link id="plantsLink" to='/Login'>Login</Link>  
                </Route>

                <Route path="/(register|login)">
                <Link id="plantsLink" to='/Login'>Login</Link>  
                </Route>

                <Route path = "/(account|settings)">
                <Link id="plantsLink" to='/Settings'>Settings</Link>  
                </Route>


                
            </NavContain>

    );


}

export default NavBar;