import React,{Component} from 'react'


class Profile extends Component {
    constructor(){
       super()
       this.state = {
           userId:'',
           userAlbums: [],
           displayedUser: {
                userId: '',
                username: '',
                email: '',
                avatar: '',
           }
       } 
    }
    render(){
        return(
            <div>
                <h2>Profile Page </h2>
            </div>
        )
    }
}


export default Profile