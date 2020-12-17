import React,{Component} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import url from '../../apiURL'
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
            await axios.post(`${url}/albums`, {
                id: albumId,
                user_id: userId,
                title: name,
                artist: artist,
                album_img_url: image
            })
            console.log('Album added', this.state)
            setTimeout(() => {
                this.redirectToProfilePage()
            }, 2000)  
        }catch(error){
            console.log('fetch err', error)
        }
    }
    redirectToProfilePage = () => {
        this.props.history.push(`/profile/${this.state.userId}`)
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


export default withRouter(AddAlbum)