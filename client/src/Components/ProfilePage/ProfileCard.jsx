import React from 'react'


const ProfileCard = (props) => {
    return (
        <div className='profile-card'>
            <img src={props.user.avatar} alt={props.user.username} height={'150px'} width={'150px'}/>
            <h4>{props.user.username}</h4>
        </div>
    )
}




export default ProfileCard