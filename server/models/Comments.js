const db = require('../db/index')

getCommentsByAlbumId = async (album_id) => {
    try{
        let selectQuery = 'SELECT users.username, comments.comment_body, comments.album_id FROM comments INNER JOIN users ON users.id=comments.commenter_id WHERE (album_id= $1 AND comments.is_deleted= false)'
        const albumComments = await db.any(selectQuery,[album_id])
        return albumComments
    }catch(error){
        console.log('err', error)
    }
}

addNewComment = async (comment) => {
    try{
        insertQuery = `INSERT INTO comments(comment_body, user_id, commenter_id, album_id) VALUES($/comment_body/,$/user_id/, $/commenter_id/, $/album_id/, $/is_deleted/)`

        const newComment = await db.one(insertQuery, {
            comment_body: comment.comment_body,
            user_id: comment.user_id,
            commenter_id: comment.commenter_id,
            album_id: comment.album_id,
            is_deleted: false
        })
        return newComment
    }catch(error){
        console.log('err', error)
    }
}

deleteComment = async (id) => {
    try{
        const deletedComment = await db.one('UPDATE comments SET is_deleted = true WHERE id = $1')
        return deletedComment
    }catch(error){
        console.log('err', error)
    }
}

module.exports = {
    getCommentsByAlbumId,
    addNewComment,
    deleteComment
}