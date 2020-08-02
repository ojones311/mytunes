import React,{Component} from 'react'
import '../Styles/LandingPage/NewUserForm.css'
import axios from 'axios'


class NewUserForm extends Component {
    constructor(){
        super()
        this.state = {
            username: '', 
            avatar_url: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg'
            ,
            submittedSearch: false
        }
    }

    postNewUser = async () => {
        const {username, avatar_url} = this.state
        try{
            await axios.post('/users', {
                username,
                avatar_url
            })
        }catch(error){
            console.log('error', error)
        }
    }

    handleNewUserSubmission = async (event) => {
        event.preventDefault()
        // if(this.isFormCompleted()){
        //     this.setState({
        //         submittedSearch: true,
        //     })
            await this.postNewUser()
            this.clearSearchBar()
        // }else {
        //     console.log('Complete search to continue')
        // } 
    }
    
//hardcode avatar url until I add multer to backend
    handleUsernameInputValue = async(event) => {
        this.setState({
            username: event.target.value
        })
        console.log(this.state.username)
    }
    // isFormCompleted = () => {
    //     return(
    //         this.state.username.trim()
    //     )
    // }
    clearSearchBar = () => {
        console.log('Search bar cleared')
        this.setState({
           username: this.state.username
        })
    }
    render(){
        const {username} = this.state

        return(
            <div className='user-form'>
                <form id='form' onSubmit={this.handleNewUserSubmission}>
                    <input type= 'text' onChange={this.handleUsernameInputValue} value={username} size={'50'} placeholder={'Add a new user'}/>
                    <button type='submit'>Add new user</button>
                </form>

            </div>
        )
    }
}



export  default NewUserForm