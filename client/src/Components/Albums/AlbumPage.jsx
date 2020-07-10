import React, {Component} from 'react'
import axios from 'axios'


class AlbumPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            albumId: props.match.params.id,
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
            // let response = await axios.get()
        }catch(error){
            console.log('err', error)
        }
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