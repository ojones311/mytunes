import React, {Component} from 'react'
import NewUserForm from './NewUserForm.jsx'
import UserSelectorCard from './UserSelectorCard.jsx'
import '../Styles/LandingPage/LandingPage.css'
import axios from 'axios'


class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            userSelection: [],
            selectedUser: props.userId
        }
    }

    componentDidMount = async () => {
        await this.fetchUserList();
        await this.checkUserSignedIn();
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
    checkUserSignedIn = async () => {
        const signedInUser = this.state.userSelection.filter(user => user.id == this.state.userId)
        console.log(signedInUser)
        return signedInUser
    }
    render(){
        const {userSelection} = this.state
        return(
            <>
            <div>
                <h2 id='landing-title'>Create a new user or select existing user for demo</h2>
                <div className='user-selection'>
                    {userSelection.map((user) => {
                        return(
                           <UserSelectorCard key={user.id} user={user} setUser={this.props.setUser}/>
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