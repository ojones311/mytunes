import React, {Component} from 'react'
import axios from 'axios'


class AlbumPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            albumId: props.match.params.id,
            // album:props.album
            comments: [],
            numberOfComments:''
        }
    }

    componentDidMount = async () => {
        await this.fetchUserAlbum()
    }

    fetchUserAlbum = async () => {
        console.log(this.props)
        const {userId, albumId} = this.state
        try{
            let response = await axios.get(`/albums/albumId/${albumId}`)
            const album = response.data.payload
            console.log(album)
        }catch(error){
            console.log('err', error)
        }
    }
    fetchCommentsByAlbumId = async() => {

    }
    render(){
        return(
            <div>
                <h2>Album Page</h2>
                <p>Where user can comment on the specific user album</p>
            </div>
        )
    }
}


export default AlbumPage