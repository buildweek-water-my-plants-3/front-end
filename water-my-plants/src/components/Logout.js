import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function () {
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://water-my-plants-server.herokuapp.com/auth/logout", {
        withCredentials: true,
      })
      .catch((err) => console.error(err))
      .then(() => localStorage.removeItem("token"))
      .finally(() => history.push("/login"));
  }, [history]);
  return null;
}
