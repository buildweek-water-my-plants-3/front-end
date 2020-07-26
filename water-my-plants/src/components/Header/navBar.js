import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
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
                <Link id="plantsLink" to='/'>Home</Link>
                <Link id="plantsLink" to="/Account">Account</Link>
                <Link id="plantsLink" to='/register'>Register</Link>
                <Link id="plantsLink" to='/logout'>Logout</Link> 
            </NavContain>

    );


}

export default NavBar;