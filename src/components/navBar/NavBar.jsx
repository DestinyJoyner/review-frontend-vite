import { Link } from "react-router-dom"
import { IoGameControllerSharp } from "react-icons/io5";
import "./NavBar.css"

export default function NavBar () {

    return (
        <nav className="navBar">

            <Link to = "/"><IoGameControllerSharp size={"40px"} /></Link>

            <Link to= "/videogames">All Videogames</Link>

            <Link to = "/videogames/new">Add A Videogame</Link>

        </nav>
    )
}