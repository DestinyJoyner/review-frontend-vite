import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GiStarsStack } from "react-icons/gi";
import axios from "axios";
import "./VideogameShow.css";

const API = import.meta.env.VITE_APP_API_URL;

export default function VideogameShow() {
  const [videogameDetails, setVideogameDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate()

//   handleDelete

function handleDelete () {
    axios.delete(`${API}/videogame/${id}`)
    .then(res => navigate("/videogames"))
    .catch(err => console.log(err))
}

  useEffect(() => {
    axios
      .get(`${API}/videogame/${id}`)
      .then((res) => setVideogameDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="videogameShowPage">
    <div className="videogameShow gridCenter">
      <h2>{videogameDetails.title}</h2>
      <img src={videogameDetails.game_image} alt={videogameDetails.title} />
      <span>{videogameDetails.game_system}</span>

      {videogameDetails.favorite ? <GiStarsStack color={"gold"} /> : null}
    </div>

    <aside className="videogameShow_buttons">
        <div className="gridCenter">
        <Link to = {`/videogames/${id}/edit`}>Edit</Link>
        </div>
      

        <button
        onClick={() => handleDelete()}>Delete</button>
    </aside>
    </div>
  );
}
