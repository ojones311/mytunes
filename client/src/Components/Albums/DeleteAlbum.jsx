import axios from 'axios'
import React,{Component} from 'react'
import url from '../../apiURL'


class DeleteAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: this.props.user,
            albumId: this.props.album.album_id,
        }
    }

    deleteAlbum = async () => {
        const {userId, albumId} = this.state
        try {
            await axios.patch(`${url}/albums/delete/${albumId}/${userId}`)
            console.log('Album deleted')
        }catch(error){ 
            console.log('patch-error', error)
        }  
    }
    fetchUserAlbums = async() => {
        
    }
    render(){
        return(
            <div>
                <button onClick={this.deleteAlbum}>Delete</button>
            </div>
        )
    }
}


export default DeleteAlbum