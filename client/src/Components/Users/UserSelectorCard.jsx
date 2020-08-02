import React from 'react'


const UserSelectorCard = ({user, setUser}) => {
    return(
        <div id={'user'} key={user.id}>
            <h3>{user.username}</h3>
            <img id='pic-select' src={user.avatar_url} alt={'set-userimg'} onClick={()=>{setUser(user.id)}} height={'200px'} width={'150px'} /> 
        </div>
    )
}


export default UserSelectorCard