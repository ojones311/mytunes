import React from 'react'
import '../Styles/ProfilePage/Profile.css'

const ProfileCard = (props) => {
    return (
        <div className='profile-card'>
            <img src={props.user.avatar} alt={props.user.username} height={'350px'} width={'350px'}/>
            <h4>{props.user.username}</h4>
        </div>
    )
}




export default ProfileCard