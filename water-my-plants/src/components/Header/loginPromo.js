import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import SignUp from './SignUp';





const LoginDiv = styled.div
`
display: flex;
flex-direction: row;
justify-content: flex-end;
min-width: 16rem;
font-family: 'Roboto', sans-serif;
max-width: 20%;

        img {
          width: 1rem;
          margin-right: 1rem;
        }

        span {
          text-transform: uppercase;
          font-weight: 900;
          font-size: .9rem;
        }

`


const LoginPrompt = styled.div
`
display: flex;
height: 2rem;
align-items: center;
justify-content: flex-end;
min-width: 6rem;


          &&:hover {
            box-sizing: border-box;
            border-top: 4px solid transparent;
            border-bottom: 4px solid #FDCB02;
           margin-left: 3px;
          }


`



function LoginPromo() {


  return (
    
   <LoginDiv>

     <LoginPrompt>
        
        

        <SignUp />

  

     </LoginPrompt>


   </LoginDiv>










  );
}

export default LoginPromo;
