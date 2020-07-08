import React from 'react'
import {Link} from 'react-router-dom'



const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to= "/">Home</Link>{" "}
                <Link to="/about">About</Link>{" "}
                <Link to="/users">Users</Link>{" "}
                <Link to="/profile">Profile</Link>{" "}
                <Link to="/albums">Albums</Link>{" "}
                <Link to="/albums/add">New Album</Link>
            </nav>
        </div>
    )
}


export default NavBar