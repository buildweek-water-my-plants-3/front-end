import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function () {
    const [contact, setContact] = useState([]);


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
            <div className='coffee-box'>
                    <div className='coffee-each' key={id}>
                        <h2>Account info</h2>
                        <hr></hr>
                        <p>Name: {username}</p>
                        <p>PhoneNumber: {phoneNumber}</p>
                    </div>
            </div>
        </div>
    )
}

