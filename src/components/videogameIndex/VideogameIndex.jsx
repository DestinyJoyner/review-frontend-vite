import { useEffect, useState } from "react"
import axios from "axios"
import { GiStarsStack } from "react-icons/gi";
import "./VideogameIndex.css"

const API = import.meta.env.VITE_APP_API_URL

export default function VideogameIndex () {
    const [allVideogames, setAllVideogames] = useState([])

    function getAllVideogames() {
        axios.get(`${API}/videogame`)
        .then(res => {
            setAllVideogames(res.data)
        })
        .catch(err => console.log(err))
    }

    /* 
    map, filter, find
    array.map(element at iteration, index, arr)
    [,{} {}, {}]
    */

 useEffect(() => {
   getAllVideogames()
 },[])

    return (
        <div className="videogameIndex">
            <h2>Browse Videogames!</h2>
            {
                allVideogames.map(videogameObj => 
                <div className="videogameIndex_gameCard gridCenter">
                    <img src={videogameObj.game_image} alt={videogameObj.title} />
                    <h3>{videogameObj.title}</h3>
                    <span>{videogameObj.game_system}</span>
                    <span>{videogameObj.favorite ? <GiStarsStack color={"gold"} size={"30px"}/> : null }
                    </span>
                 
                    
                </div>
                )
            }
        </div>
    )
}