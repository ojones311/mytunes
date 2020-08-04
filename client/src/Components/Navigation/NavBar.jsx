import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import '../../App.css'

const NavBar = (props) => {
    return (
        <div className='nav-bar'>
            <Navbar className="bg-light justify-content-between">
                <Link to= "/">Home</Link>{" "}
                <Link to="/about">About</Link>{" "}
                <Link to="/users">Users</Link>{" "}
                <Link to={`/profile/${props.userId}`}>Profile</Link>{" "}
                <Link to="/albums/all"> All Albums</Link>{" "}
                <Link to="/albums/search_album">Add Album</Link>{" "}
            </Navbar>
        </div>
    )
}


export default NavBar