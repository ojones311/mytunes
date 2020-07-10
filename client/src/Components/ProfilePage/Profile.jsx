import React,{Component} from 'react'
import ProfileCard from '../ProfilePage/ProfileCard.jsx'
import AlbumCard from '../Albums/AlbumCard.jsx'
import axios from 'axios'


class Profile extends Component {
    constructor(props){
       super(props)
       this.state = {
           userId: props.userId,
           userAlbums: [],
           displayedUser: {
                id: props.match.params.id,
                username: '',
                avatar: '',
           },
           showAlbums: false
       } 
    }
    componentDidMount = async () => {
       await this.fetchUserProfile();
       await this.fetchUserAlbums();
    }

    fetchUserProfile = async() => {
        const {displayedUser} = this.state
        try{
            let response = await axios.get(`/users/id/${displayedUser.id}`)
            const profile = response.data.payload
            console.log(profile)
            this.setState({
                displayedUser: {
                    id: this.state.displayedUser.id,
                    username: profile.username,
                    avatar: profile.avatar_url
                }
            })
        }catch(error){
            console.log('err',error)
        }
    }

    fetchUserAlbums = async () => {
        const {displayedUser} = this.state
        try{
            let response = await axios.get(`/albums/userid/${displayedUser.id}`)
            const userAlbums = response.data.payload
            console.log(userAlbums)
            this.setState({
                userAlbums: userAlbums
            })
        }catch(error){
            console.log('err',error)
        }
    }
    toggleAlbumList = () =>{
        this.setState({
            showAlbums: !this.state.showAlbums
        })
    }
    //Fix display Im toggling profile instead of album list
    render(){
        const {displayedUser,userAlbums, showAlbums} = this.state

        let displayAlbums = showAlbums ? (
            <div className='user-profile'>
                    <ProfileCard user={displayedUser}/>
            </div>
        ): null

        return(
            <div className='profile-page'>
                <h2>Profile Page </h2>
                <button onClick={this.toggleAlbumList}>Show Albums</button>
                {displayAlbums}
                <div className='user-albums'>
                    {userAlbums.map((album) => {
                        return (
                            <AlbumCard key={album.id} album={album}/>
                        )
                    })}
                </div>
                
            </div>
        )
    }
}


export default Profile