import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


export default function() {
    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')

	const history = useHistory()
	
	const handleSubmit = (e) => {
		e.preventDefault()
		const payload = { username, password, phoneNumber }
        // `withCredentials` option is required to automatically save/send cookies
        // use this for all CRUD requests on protected routes on the BW project
        // (in this project, coffee is a protected route)
        // axios.post('https://starter-bw.herokuapp.com/auth/login', payload, { withCredentials: true })
        axios.post('https://water-my-plants-server.herokuapp.com/auth/register', payload, {withCredentials: true})
			.then((res) => {
				console.log('login')
				localStorage.setItem('token', (res.data.payload))
				history.push('/coffee')
			})
			.catch((err) => console.log(err))
	}

	const RegisterBox = styled.div `
		border: 3px solid green;
		border-radius: .35rem;
		max-width: 30vw;

		input {
			min-height: 2rem;
			margin: 2rem;
		}
	`

	const SubmitButton = styled.button `
		width: calc(100% - 4rem);
		border-radius: .35rem;
		margin-top: 2rem;
		padding: 1.5rem;
		background-color: #0b9444;
		text-transform: uppercase;
		font-size: 1.5rem;
		color: white;
		margin: 0 2rem;
		margin-bottom: 2rem;
	
	`
	
	const Title = styled.h1 `
	text-align: center;
	
	`




	return (
		<form onSubmit={handleSubmit}>
			
			<Title>Login</Title>

			<RegisterBox>

			<input
				type='text'
				placeholder='Username'
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
            <input
				type='phoneNumber'
				placeholder='Phone Number'
				value={phoneNumber}
				onChange={e => setPhoneNumber(e.target.value)}
			/>


			<SubmitButton type='submit'>Submit</SubmitButton>

		</RegisterBox>



		</form>
	)
}	