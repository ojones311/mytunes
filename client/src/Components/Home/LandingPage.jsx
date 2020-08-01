import React, {Component} from 'react'
import NewUserForm from './NewUserForm.jsx'
import '../Styles/LandingPage/LandingPage.css'
import axios from 'axios'


class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            userSelection: []
        }
    }

    componentDidMount = async () => {
        await this.fetchUserList();
    }

    fetchUserList = async () => {
        try{
            let response = await axios.get(`/users/all`)
            const users = response.data.payload
            this.setState({
                userSelection: users
            })
            console.log(users)
        }catch(error){
            console.log('err', error)
        }
    }
    selectUser= async () => {
        
    }
    render(){
        const {userSelection} = this.state
        return(
            <>
            <div>
                <h2>Create a new user or select existing user for demo</h2>
                <div className='user-selection'>
                    {userSelection.map((user) => {
                        return(
                            <div id={'user'} key={user.id}>
                                <h3>{user.username}</h3>
                                <img id='pic-select'src={user.avatar_url} alt={'set-userimg'} height={'200px'} width={'auto'} /> 
                            </div>
                        )
                    })}
                </div>
                <NewUserForm />
            </div>
            
            </>
        )
    }
}





export default LandingPage