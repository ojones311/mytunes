import React,{Component} from 'react'
import UserCard from '../Users/UserCard.jsx'
import '../Styles/UserStyling/User.css'
import axios from 'axios'

class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            userList: []
        }
    }
    componentDidMount = async () => {
       await this.fetchUserList()
    }

    fetchUserList = async () => {
        try{
            let response = await axios.get(`/users/all`)
            const users = response.data.payload
            this.setState({
                userList: users
            })
        }catch(error){
            console.log('err', error)
        }
    }

    
    render(){
        const {userList} = this.state 
        return (
            <>
                <div className='user-list'>
                    {userList.map((user) => {
                        return (<UserCard key={user.id} user={user}/>)
                    })}
                </div>    
            </>
        )
    }
}

export default UserList