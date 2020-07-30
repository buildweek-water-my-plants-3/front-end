import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./UpdatePlant.styles.css";

const initialPlant = {
  h2oFrequency: 0,
  nickname: "",
  species: "",
};

const AddPlant = () => {
  const [plantToAdd, setPlantToAdd] = useState(initialPlant);
  const userId = localStorage.getItem("userID");

  const handleChange = (e) => {
    if (e.target.name === "h2oFrequency") {
      setPlantToAdd({ ...plantToAdd, [e.target.name]: +e.target.value });
    } else {
      setPlantToAdd({ ...plantToAdd, [e.target.name]: e.target.value });
    }
  };

  const addNewPlant = (e) => {
    e.preventDefault();
    console.log(plantToAdd);
    axios
      .post(
        `https://water-my-plants-server.herokuapp.com/users/${userId}/plants`,
        plantToAdd,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        setPlantToAdd(initialPlant);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-plant-box">
      <h1>Edit Plant Information</h1>
      <form onSubmit={addNewPlant}>
        <label>H2O Frequency: </label>
        <input
          type="integer"
          name="h2oFrequency"
          onChange={handleChange}
          placeholder="H2o Frequency"
          value={plantToAdd.h2oFrequency}
        />
        <label>Nickname: </label>
        <input
          type="text"
          name="nickname"
          onChange={handleChange}
          placeholder="Nickname"
          value={plantToAdd.nickname}
        />
        <label>Species name: </label>
        <input
          type="text"
          name="species"
          onChange={handleChange}
          placeholder="Species"
          value={plantToAdd.species}
        />
        <button>Submit Changes</button>
      </form>
    </div>
  );
};
export default AddPlant;
