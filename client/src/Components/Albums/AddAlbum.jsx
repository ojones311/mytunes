import React,{Component} from 'react'
import {Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

class AddAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            albumId: props.id,
            name: props.name,
            artist: props.artist,
            image: props.image,
            redirect: null
        }
    }
    addAlbumToStorage = async () => {
        const {albumId, userId, name, artist, image} = this.state
        try{
            await axios.post('/albums', {
                id: albumId,
                user_id: userId,
                title: name,
                artist: artist,
                album_img_url: image
            })
            console.log('Album added', this.state)
        }catch(error){
            console.log('fetch err', error)
        }
    }
    redirectToProfilePage = () => {
        this.setState({ 
            redirect: `/profile/${this.state.userId}`
        })
    }
    render(){
        if(this.state.redirect){
            return(
                <Redirect to={this.state.redirect}/>
            )
        }
        return(
            <div>
                <Button variant='primary' size='lg' onClick={this.addAlbumToStorage}>Add</Button>{' '}
            </div>
        )
    }
}


export default AddAlbum