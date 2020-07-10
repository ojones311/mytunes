import React,{Component} from 'react'


class Profile extends Component {
    constructor(){
       super()
       this.state = {
           userId:'',
           userAlbums: [],
           displayedUser: {
                username: '',
                email: ''
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