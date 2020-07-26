import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserImage from '../../src/components/assets/user-placeholder.jpg';


export default function () {
    const [contact, setContact] = useState([]);

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
        align-items: flex-end;
        justify-content: flex-end;
        background-color: #dcdcdc;
        height: calc(100% - 2rem);
        width: 100%;
        border: 2px solid #555555;
        padding: 2rem;
        box-sizing: border-box;
        `

    const AccountStyle = styled.div `
    margin: 2rem;
    width: calc(100% - 2rem)
    `

    let id = localStorage.getItem('userID');


    useEffect(() => {
        axios
            .get(`https://water-my-plants-server.herokuapp.com/users/${id}`, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                setContact(res.data)
            })
            .catch(err => console.log(err))
    },[id])

    const {username, phoneNumber} = contact;

    return (
        <div className='coffee-container'>


<DashContain>
                
                <DashCard>

                    <DashCardRow>

                        <DashCardLeft>

                            <UserCard>
                                <DashImg src={UserImage} />
                                <span>Hello {username}</span>

                            </UserCard>

                            <AccountStyle>
                                <div key={id}>
                                    <h2>Account info</h2>
                                    <hr></hr>
                                    <p>Name: {username}</p>
                                    <p>Phone Number: {phoneNumber}</p>
                                </div>
                            </AccountStyle>

                         </DashCardLeft>

                         <DashCardRight>

                            <PlantForms>

                            </PlantForms>

                        </DashCardRight>

                    </DashCardRow>

                </DashCard>

               

            </DashContain>
      
        </div>
    )
}











