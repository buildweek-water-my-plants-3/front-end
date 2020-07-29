import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { phoneNumberState, passwordState } from './Store/States';
import {useRecoilState} from 'recoil'
import styled from 'styled-components'


const SettingsBox = styled.div `
border: 3px solid green;
border-radius: .35rem;
display: flex;
flex-wrap: wrap;
flex-direction: column;
min-width: 300px;
padding: 2rem;

input {
	display: inline-block;
	min-height: 2rem;
	margin: 0rem 0rem 1rem;
	max-width: 100%;
}

button {
    display: inline-block !important;
    height: 2rem;
    width: 48%;

}


`

const SettingsButtons = styled.div `
display flex;
flex-direction: row;
align-items: space-between;
justiy-content: space-between;
`

const SubmitButton = styled.button `
	width: 100%;
	border-radius: .35rem;
	margin-top: 1rem;
	padding: 1.5rem;
	background-color: #0b9444;
	text-transform: uppercase;
	font-size: 1.5rem;
	color: white;
`

const Title = styled.h1 `
text-align: center;

`






const EditAccount = () => {
    const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState)
	const [password, setPassword] = useRecoilState(passwordState)
    const [repassword, setRepassword] = useState('')

    const history = useHistory()
    
    let id = localStorage.getItem('userID');
	
	const handleSubmit = (e) => {
		e.preventDefault()
        const payload = { password, phoneNumber }

        if(password === repassword){
            axios.put(`https://water-my-plants-server.herokuapp.com/users/${id}`, payload, { withCredentials: true })
			.then((res) => {
				console.log('editted info')
				history.push('/Account')
			})
            .catch((err) => console.log(err))
             } else {window.alert("Please make sure your password matches!")}

       
    }
    

	return (
        <div style={{ width:'60%'}}>
          
        
            <div style={{display:'flex', justifyContent:'center',}}>

       
                <form onSubmit={handleSubmit}>
                    <h1>Account Settings</h1>

                    <SettingsBox>
                    <input
                        type='password'
                        placeholder='New Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='Re-Enter Password'
                        value={repassword}
                        onChange={e => setRepassword(e.target.value)}
                    />
                    <input
                        type='phoneNumber'
                        placeholder='Valid PhoneNumber'
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />

                    <SettingsButtons>

                        <button onClick={handleSubmit}>Submit</button>
                        <button style={{marginLeft:"1rem"}} onClick={() => history.goBack()}>Back</button>

                    </SettingsButtons>

                    </SettingsBox>

                </form>

      
                
            </div>
         
        
        </div> 
	)
}

export default EditAccount;