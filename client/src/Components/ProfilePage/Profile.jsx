import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import ProfileCard from '../ProfilePage/ProfileCard.jsx'
import AlbumCard from '../Albums/AlbumCard.jsx'
import url from '../../apiURL'
import '../Styles/ProfilePage/Profile.css'
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
           showAlbums: true
       } 
    }
    componentDidMount = async () => {
       await this.fetchUserProfile();
       await this.fetchUserAlbums();
    }
    componentDidUpdate = async () => {
        await this.fetchUserAlbums();
    }
    fetchUserProfile = async() => {
        const {displayedUser} = this.state
        try{
            let response = await axios.get(`${url}/users/id/${displayedUser.id}`)
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
            let response = await axios.get(`${url}/albums/userid/${displayedUser.id}`)
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

    render(){
        const {displayedUser,userAlbums, showAlbums} = this.state
        let displayAlbums = showAlbums ? (
            <div className='user-albums'>
                    {userAlbums.map((album) => {
                        return (
                            <AlbumCard key={album.album_id} album={album} user={displayedUser.id} />
                        )
                    })}
                </div>
        ): null

        return(
            <div className='profile-page'>
                <div className='user-profile'>
                    <ProfileCard user={displayedUser}/>
                </div>
                {displayAlbums}  
            </div>
        )
    }
}


export default withRouter(Profile)