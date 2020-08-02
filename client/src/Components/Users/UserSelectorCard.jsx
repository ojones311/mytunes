import React from 'react'


const UserSelectorCard = ({user, selectUser}) => {


    return(
        <div id={'user'} key={user.id}>
            <h3>{user.username}</h3>
            <img id='pic-select' src={user.avatar_url} onClick={selectUser} alt={'set-userimg'} height={'200px'} width={'auto'} /> 
        </div>
    )
}


export default UserSelectorCard