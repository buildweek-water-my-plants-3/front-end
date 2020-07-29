import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserImage from '../../src/components/assets/user-placeholder.jpg';
import {useRecoilState, useRecoilValue} from 'recoil'
import {userState, plantState} from '../components/Store/States'
import { Link } from 'react-router-dom';

export default function () {

    const DashContain = styled.div
    `
    display:flex;
    flex-direction: row;
    width: 100%;     
    `

    const DashImg = styled.img
    `
    display: inline-block;
    max-width: 100%;
    margin-top: 2rem;
    margin-left: 0rem;
    `

        const DashCard = styled.div
        `
        width: 100%; 
        max-width: 1200px; 
        margin: 0rem auto;     
        `

            const DashCardRow = styled.div
            `
            display: flex;
            flex-direction: row;
            min-width: 1000px;
            height: 100%;
            justify-content: space-between;
            align-items: space-between;
            `

            const DashCardLeft = styled.div 
            `
            display: flex;
            flex-direction: column;
            width: 30%;
            align-items: flex-start;
            margin-left: calc(2rem + 6px);
            `

            const DashCardRight = styled.div 
            `
            display: flex;
            flex-direction: column;
            width: 70%;
            align-items: flex-end;
            margin-right: calc(2rem + 6px);
            margin-top: 2rem;
            margin-left: 2rem;
            `

        const UserCard = styled.div
        `
        display: flex;
        flex-direction: column;
        min-width: 200px;

            span {
                color: #ffffff;
                font-weight: 700;
                text-transform: uppercase;
                padding: .5rem;
                text-align: center;
                background: #0b9444;
                margin-left: 0rem;
            }  
        `

        const PlantForms = styled.div
        `
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-color: #dcdcdc;
        height: calc(100% - 2rem);
        width: 100%;
        border: 2px solid #555555;
        padding: 1rem;
        box-sizing: border-box;
        `

    const AccountStyle = styled.div `
    
    width: 100%;
    `

    const [user, setUser] = useRecoilState(userState)
    const [plants, setPlants] = useRecoilState(plantState)

    let id = localStorage.getItem('userID');


    useEffect(() => {
        axios
            .get(`https://water-my-plants-server.herokuapp.com/users/${id}`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setUser(res.data)
            })
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        axios
        .get(`https://water-my-plants-server.herokuapp.com/users/${id}/plants`, { withCredentials: true })
        .then(res => {
        setPlants(res.data)
        console.log(plants, "plants")
        })
        .catch(err => console.log(err))
    


    },[])




    return (
        <div className='coffee-container'>


<DashContain>
                
                <DashCard>

                    <DashCardRow>

                        <DashCardLeft>

                            <UserCard>
                                <DashImg src={UserImage} />
                                <span>Hello {user.username}</span>

                            </UserCard>

                            <AccountStyle>
                            <div key={id}>
                                    <h2>Account info</h2>
                                    <hr></hr>
                                    <p>Name: {user.username}</p>
                                    <p>Phone Number: {user.phoneNumber}</p>
                                </div>
                             <button><Link to="/EditAccount">Edit Account</Link></button>   
                            </AccountStyle>

                         </DashCardLeft>

                         <DashCardRight style={{border:'solid red'}}>
                         {plants.map((res) => 
                            <PlantForms>
                            <div key={res.id} style={{display:'flex', justifyContent:'center', flexDirection:'column', alignContent:'center'}}>
                            <h3>nickname: {res.nickname} </h3>
                            <p>species: {res.species} </p>
                            <p>h2oFrequency: {res.h2oFrequency} </p>
                            <img src={res.image}/>
                            </div>
                            <button>Edit Plant</button>
                            </PlantForms>)}

                        </DashCardRight>

                    </DashCardRow>

                </DashCard>

               

            </DashContain>
      
        </div>
    )
}











