import React,{Component} from 'react'


class DeleteAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: this.props.user,
            albumId: this.props.album.album_id,
        }
    }

    deleteAlbum = async () => {
        console.log('Album deleted')
        const {userId, albumId} = this.state
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