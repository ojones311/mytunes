import React from 'react'
import {useHistory} from 'react-router-dom'
import '../Styles/UserStyling/User.css'

const UserCard = (props) => {

    let history = useHistory()

    const redirectToProfilePage = () => {
        const {user} = props
        
        history.push(`/profile/${user.id}`)
    }
    return(
        <div className='user-card'>
            <img 
                src={props.user.avatar_url}
                onClick={redirectToProfilePage}
                alt={'profile pic'}width={'300px'} 
                height={'300px'}
            />
            <h4>{props.user.username}</h4>
        </div>
    )
}


export default UserCard