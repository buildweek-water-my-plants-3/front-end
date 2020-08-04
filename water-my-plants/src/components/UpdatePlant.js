import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./UpdatePlant.styles.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, plantState } from "../components/Store/States";

const initialPlant = {
  h2oFrequency: 0,
  nickname: "",
  species: "",
};

const UpdatePlant = (props) => {
  // const [user, setUser] = useRecoilState(userState);
  const [plants, setPlants] = useRecoilState(plantState);

  const [plantToEdit, setPlantToEdit] = useState(initialPlant);
  const history = useHistory();

  const plantId = props.match.params.id;
  const userId = localStorage.getItem("userID");

  function updatePlants() {
    axios
      .get(
        `https://water-my-plants-server.herokuapp.com/users/${userId}/plants`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        setPlants(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios
      .get(
        `https://water-my-plants-server.herokuapp.com/users/${userId}/plants/${plantId}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setPlantToEdit({
          h2oFrequency: res.data.h2oFrequency,
          nickname: res.data.nickname,
          species: res.data.species,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setPlantToEdit({ ...plantToEdit, [e.target.name]: e.target.value });
  };

  const editPlant = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://water-my-plants-server.herokuapp.com/users/${userId}/plants/${plantId}`,
        plantToEdit,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("Edit Plant Post", res);
        updatePlants();
        history.push("/account");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="update-plant-box">
      <h1>Edit Plant Information</h1>
      <form onSubmit={editPlant}>
        <label>H2O Frequency: </label>
        <input
          type="integer"
          name="h2oFrequency"
          onChange={handleChange}
          placeholder="H2o Frequency"
          value={plantToEdit.h2oFrequency}
        />
        <label>Nickname: </label>
        <input
          type="text"
          name="nickname"
          onChange={handleChange}
          placeholder="Nickname"
          value={plantToEdit.nickname}
        />
        <label>Species name: </label>
        <input
          type="text"
          name="species"
          onChange={handleChange}
          placeholder="Species"
          value={plantToEdit.species}
        />
        <button>Submit Changes</button>
      </form>
    </div>
  );
};

export default UpdatePlant;
