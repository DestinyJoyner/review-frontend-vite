import { Routes, Route } from "react-router-dom"
import Home from "../../pages/Home.jsx"
import New from "../../pages/New.jsx"
import Edit from "../../pages/Edit.jsx"
import Show from "../../pages/Show.jsx"
import Error from "../../pages/Error.jsx"
import Videogames from "../../pages/Videogames.jsx"
import { Navigate } from "react-router-dom"


export default function RouteComponent () {

    return (
        <Routes>
            
            <Route path = "/" element = { <Home /> } />

            <Route path = "/videogames" element = { <Videogames /> } />

            <Route path = "/videogames/new" element = { <New /> } />
            
            <Route path = "/videogames/:id" element = { <Show /> } />

            <Route path = "/videogames/:id/edit" element = { <Edit/> } />

            <Route path = "/not-found" element = { <Error /> } />

            <Route path = "*" element = {<Navigate to = "/not-found"/>} />

        </Routes>
    )
}

/* 
<Router>
    <Routes>
        <Route />
    </Routes>
</Router>
*/