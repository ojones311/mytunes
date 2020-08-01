import React,{Component} from 'react'
import axios from 'axios'


class NewUserForm extends Component {
    constructor(){
        super()
        this.state = {
            newUser: {username: '', avatar_url: ''},
            submittedSearch: false
        }
    }
    postNewUser = async () => {
        try{
            await axios.post('/users', this.state.newUser)
        }catch(error){
            console.log('error', error)
        }
    }

    handleNewUserSubmission = (event) => {
        event.preventDefault()

    }

    handleUsernameInputValue = async(event) => {
        this.setState({
            newUser: {
                ...this.state.newUser,
                username: event.target.value
            }
        })
        console.log(this.state.newUser)
    }
    render(){
        const {newUser} = this.state
        return(
            <form onSubmit={this.handleNewUserSubmission}>
                <input type= 'text' onChange={this.handleUsernameInputValue} value={newUser.username}/>
                {/* <input type= 'text' /> */}
            </form>
        )
    }
}



export  default NewUserForm