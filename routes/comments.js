const express = require('express');
const router = express.Router();
const Comments = require('../models/Comments')

router.get('/', (req, res, next) =>{
    res.send('users rt: Refer to the README on how to navigate routes')
})

router.get('/album/:id', async (req, res, next) => {
    const {id} = req.params
    try{
        const albumCommentsById = await Comments.getCommentsByAlbumId(id)
        res.json({
            payload: albumCommentsById,
            msg: `Getting all comments from album # ${id}`,
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Failed to get comments',
            err: true
        })
    }
})

router.get('/spotify/:id', async (req, res, next) => {
    const {id} = req.params
    try{
        const albumCommentsBySpotifyId = await Comments.getCommentsBySpotifyId(id)
        res.json({
            payload: albumCommentsBySpotifyId,
            msg: `Getting all comments from album # ${id}`,
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Failed to get comments',
            err: true
        })
    }
})

router.post('/', async (req, res, next) => {
    const {comment_body, commenter_id, album_id} = req.body
    try{
        let comment = {
            comment_body, 
            commenter_id, 
            album_id
        }
        const newComment = await Comments.addNewComment(comment)
        res.json({
            payload: newComment,
            msg: 'Comment posted. Success',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Something went wrong. Posting failed',
            err: true
        })
    }
})

router.patch('/delete/:id', async (req, res, next) => {
    const {id} = req.params
    try{
        const deleteComment = await Comments.deleteComment(id)
        res.json({
            payload: deleteComment,
            msg: 'Success.Deleting comment by id',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Failed to delete comment',
            err: true
        })
    }
})
module.exports = router 