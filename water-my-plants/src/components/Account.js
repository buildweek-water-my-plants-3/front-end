import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import UserImage from "../../src/components/assets/user-placeholder.jpg";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, plantState } from "../components/Store/States";
import { Link, useHistory } from "react-router-dom";

export default function () {
  const DashContain = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `;

  const DashImg = styled.img`
    display: inline-block;
    max-width: 100%;
    margin-top: 2rem;
    margin-left: 0rem;
  `;

  const DashCard = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0rem auto;
  `;

  const DashCardRow = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 1000px;
    height: 100%;
    justify-content: space-between;
    align-items: space-between;
  `;

  const DashCardLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: flex-start;
    margin-left: calc(2rem + 6px);
  `;

  const DashCardRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-items: flex-end;
    margin-right: calc(2rem + 6px);
    margin-top: 2rem;
    margin-left: 2rem;
  `;

  const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;

    span {
      color: #ffffff;
      font-weight: 700;
      text-transform: uppercase;
      padding: 0.5rem;
      text-align: center;
      background: #0b9444;
      margin-left: 0rem;
    }
  `;

  const PlantForms = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #dcdcdc;
    min-height: 50%;
    width: 100%;
    border: 2px solid #555555;
    padding: 1rem;
    box-sizing: border-box;
  `;

  const AccountStyle = styled.div`
    width: 100%;
  `;

  const [user, setUser] = useRecoilState(userState);
  const [plants, setPlants] = useRecoilState(plantState);
  const history = useHistory();

  let id = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(`https://water-my-plants-server.herokuapp.com/users/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function getPlants() {
    axios
      .get(`https://water-my-plants-server.herokuapp.com/users/${id}/plants`, {
        withCredentials: true,
      })
      .then((res) => {
        setPlants(res.data);
        console.log(plants, "plants");
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPlants();
  }, [setPlants]);

  function deletePlant(plantId) {
    axios
      .delete(
        `https://water-my-plants-server.herokuapp.com/users/${id}/plants/${plantId}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        getPlants();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="coffee-container">
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
              </AccountStyle>
              <button
                className="add-plant-button"
                onClick={() => {
                  history.push(`add-plant/${id}`);
                }}
              >
                Add Plant
              </button>
            </DashCardLeft>

            <DashCardRight>
              <PlantForms>
                {plants.map((res) => (
                  <PlantCard key={res.id}>
                    <h3>{res.nickname} </h3>
                    <TextSpread>
                      <p class="bold">species: </p> <p>{res.species} </p>
                    </TextSpread>
                    <TextSpread>
                      <p class="bold">h2oFrequency:</p>{" "}
                      <p> {res.h2oFrequency}</p>
                    </TextSpread>
                    {/* <img src={res.image}/> */}

                    <button
                      className="edit-plant-button"
                      onClick={() => history.push(`/edit-plant/${res.id}`)}
                    >
                      Edit Plant
                    </button>
                    <button
                      className="delete-plant-button"
                      onClick={() => {
                        deletePlant(res.id);
                      }}
                    >
                      Delete Plant
                    </button>
                  </PlantCard>
                ))}
              </PlantForms>
            </DashCardRight>
          </DashCardRow>
        </DashCard>
      </DashContain>
    </div>
  );
}

const PlantCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  max-width: 31%;
  border: 2px solid #555555;
  background: white;
  padding: 1rem;
  margin: 1rem;
  min-height: 200px;

  h3 {
    margin: 0;
    text-align: center;
  }

  button {
    width: 80%;
    height: 2rem;
    font-weight: 900;
  }
`;

const TextSpread = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;

  p {
    display: inline-block;
  }
`;
