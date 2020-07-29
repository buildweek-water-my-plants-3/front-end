import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {useRecoilState} from 'recoil'
import {userState, passwordState, phoneNumberState} from '../Store/States'

const RegisterBox = styled.div `
	border: 3px solid green;
	border-radius: .35rem;
	display: flex;
	flex-direction: column;
	min-width: 300px;
	padding: 2rem;

	input {
		display: inline-block;
		min-height: 2rem;
		margin: 0rem 0rem 1rem;
		max-width: 100%;
	}
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


export default function() {
    const [username, setUsername] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')

	const history = useHistory()
	
	const handleSubmit = (e) => {
		e.preventDefault()
		const payload = { username, password, phoneNumber }

        axios.post('https://water-my-plants-server.herokuapp.com/auth/register', payload, {withCredentials: true})
			.then((res) => {
				console.log('Register')
				history.push('/Login')
			})
			.catch((err) => console.log(err))
	}

	



	return (
		<form onSubmit={handleSubmit}>


			
			<Title>Register</Title>

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