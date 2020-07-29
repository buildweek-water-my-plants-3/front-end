import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { phoneNumberState, passwordState } from './Store/States';
import {useRecoilState} from 'recoil'

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
                    <h1>Edit account</h1>
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

                    <button onClick={handleSubmit}>Submit</button>
                    <button style={{marginLeft:"1rem"}} onClick={() => history.goBack()}>Back</button>
                </form>
                
            </div>
         
        
        </div> 
	)
}

export default EditAccount;