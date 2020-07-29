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
            numberOfComments:'',
            commentInputVal: '',
            submittedComment: false
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
                comments: comments,
                numberOfComments: comments.length
            })
        }catch(error){
            console.log('err', error)
        }
    }
    deleteComment = async (id) => {
        // const {} = this.state
        try{
            let response = await axios.patch(`/comments/delete/${id}`)
            await this.fetchCommentsByAlbumId()
        }catch(error){
            console.log('err',error)
        }
    }

    handleFormSubmission = (event) => {
        event.preventDefault()
        if(this.isFormCompleted()){
            console.log('Form submitted')
            this.setState({
                submitted: true
            })
            this.postNewComment()
            this.clearAllForms()  
        } else{
            console.log('Form is not complete my guy')
        }
    }
    handleCommentInputValue = (event) => {
        // console.log(event.target.value)
        this.setState({
            commentInputVal: event.target.value
        })
    }

    postNewComment = async () => {
        const {commentInputVal, userId, albumId} = this.state
    
        try{
            await axios.post('/comments', {
            comment_body: commentInputVal,
            commenter_id: userId, 
            album_id: albumId
            })
            await this.fetchCommentsByAlbumId()
        }catch(error){
            console.log('fetch err', error)
        }
    }
    isFormCompleted = () => {
        const {commentInputVal} = this.state
        return(
            commentInputVal
        )
    }
    clearAllForms= () => {
        console.log('Form cleared')
        this.setState({
            commentInputVal: ''
        })
    }
    render(){
        const {album, comments, numberOfComments, commentInputVal} = this.state
        return(
            <div>
                <div className='album-img'>
                    <h2>{album.title} by </h2>
                    <h4>{album.artist}</h4>
                    <img src={album.album_img_url} width={'300px'} height={'300px'}/>
                </div>
                <div className='add_comment-form'>
                <form onSubmit={this.handleFormSubmission}>
                        <input id='comment-input' type='text' size={'50'} onChange={this.handleCommentInputValue} value={commentInputVal}></input>
                        <button type='submit'>Add Comment</button>
                    </form>
                </div>
                <div className='album-comments'>
                    <h4>{numberOfComments} comments</h4>
                    {comments.map((comment) => {
                        return(
                            <Comment key={comment.id} id={comment.id} commenter={comment.username} body={comment.comment_body} deleteComment={this.deleteComment}/>
                        )    
                    })}
                </div>
            </div>
        )
    }
}


export default AlbumPage