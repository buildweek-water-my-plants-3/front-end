import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {useRecoilState} from 'recoil'
import {userState, passwordState, idState, loginState, usernameState} from '../Store/States'
import FadeIn from 'react-fade-in';
import {useForm} from 'react-hook-form';



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
		padding: 1rem;
		background-color: #0b9444;
		text-transform: uppercase;
		font-size: 1.5rem;
		color: white;
	`
	
	const Title = styled.h1 `
	text-align: center;
	
	`




export default function() {
	const {register, handleSubmit, errors} = useForm();
	const [username, setUsername] = useRecoilState(usernameState)
	const [password, setPassword] = useRecoilState(passwordState)
	const [user, setUser] = useRecoilState(userState)
	const history = useHistory()
	
	const onSubmit = (e) => {

		const payload = { username, password}
        axios.post('https://water-my-plants-server.herokuapp.com/auth/login', payload, {withCredentials: true})
			.then((res) => {
				console.log('login')
                localStorage.setItem('token', (res.data.token))
                console.log(res.data)
                localStorage.setItem('userID', res.data.user_id)
				history.push('/Account')
			})
			.catch((err) => console.log(err))
	}
	
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			
			<Title>Login</Title>

			<RegisterBox>

			<input
				type='text'
				placeholder='Username'
				name='username'
				value={username}
				ref={register({required: true, minLength: 3})}
				
				onChange={e => setUsername(e.target.value)}
			/>
			{errors.username && <p>Your username must be an email address.</p>}
			<input
				type='password'
				placeholder='Password'
				name='password'
				value={password}
				ref={register({required: true, minLength: 6})}
				onChange={e => setPassword(e.target.value)}
			/>
			{errors.password && <p>Your password must contain at a minimum 8 characters.</p>}


			<FadeIn>
				<SubmitButton type='submit'>Submit</SubmitButton>
			</FadeIn>

		</RegisterBox>



		</form>
	)
}	
