import React from 'react'
import {Link} from 'react-router-dom'



const NavBar = (props) => {
    return (
        <div>
            <nav>
                <Link to= "/">Home</Link>{" "}
                <Link to="/about">About</Link>{" "}
                <Link to="/users">Users</Link>{" "}
                <Link to={`/profile/${props.userId}`}>Profile</Link>{" "}
                <Link to="/albums/all"> All Albums</Link>{" "}
                <Link to="/albums/search_album">Add Album</Link>{" "}
            </nav>
        </div>
    )
}


export default NavBar