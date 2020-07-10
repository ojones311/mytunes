import React from 'react'


const UserCard = (props) => {
    return(
        <div className='user-card'>
            <img src={props.user.avatar_url} alt={'profile pic'}width={'300px'} height={'300px'}/>
            <h4>{props.user.username}</h4>
        </div>
    )
}


export default UserCard