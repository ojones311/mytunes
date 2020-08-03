import React from 'react'
import {useHistory} from 'react-router-dom'

const UserSelectorCard = ({user, setUser}) => {

    const history = useHistory()
    const redirectToUser = () => {
        history.push(`/profile/${user.id}`)
    }
    return(
        <div id={'user'} key={user.id}>
            <h3>{user.username}</h3>
            <img id='pic-select' src={user.avatar_url} alt={'set-userimg'} onClick={()=>{setUser(user.id);redirectToUser()}} height={'200px'} width={'150px'} /> 
        </div>
    )
}


export default UserSelectorCard