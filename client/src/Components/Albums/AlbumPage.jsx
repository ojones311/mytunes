import React, {Component} from 'react'
import Comment from '../Comment/Comment.jsx'
import axios from 'axios'


class AlbumPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            albumId: props.match.params.id,
            album:'',
            comments: [],
            numberOfComments:''
        }
    }

    componentDidMount = async () => {
        await this.fetchUserAlbum();
        await this.fetchCommentsByAlbumId();
    }

    fetchUserAlbum = async () => {
        const {albumId} = this.state
        try{
            let response = await axios.get(`/albums/albumId/${albumId}`)
            const albumInfo = response.data.payload
            console.log(albumInfo)
            this.setState({
                album: albumInfo
            })
        }catch(error){
            console.log('err', error)
        }
    }
    fetchCommentsByAlbumId = async () => {
        const {albumId} = this.state
        try{
            let response = await axios.get(`/comments/album/${albumId}`)
            const comments = response.data.payload
            console.log(comments)
            this.setState({
                comments: comments
            })
        }catch(error){
            console.log('err', error)
        }
    }
    render(){
        const {album, comments} = this.state
        return(
            <div>
                <div className='album-img'>
                    <h2>{album.title} by </h2>
                    <h4>{album.artist}</h4>
                    <img src={album.album_img_url}/>
                </div>
                <div className='album-comments'>
                    {comments.map((comment) => {
                        return(
                            <Comment key={comment.id} commenter={comment.username} body={comment.comment_body}/>
                        )    
                    })}
                </div>
            </div>
        )
    }
}


export default AlbumPage