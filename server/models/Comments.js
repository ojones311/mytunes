const db = require('../db/index')

getCommentsByAlbumId = async (album_id) => {
    try{
        let selectQuery = 'SELECT comments.id, users.username, comments.comment_body, comments.album_id FROM comments INNER JOIN users ON users.id=comments.commenter_id WHERE (id= $1 AND comments.is_deleted= false)'
        const albumComments = await db.any(selectQuery,[album_id])
        return albumComments
    }catch(error){
        console.log('err', error)
    }
}

getCommentsBySpotifyId = async (spotifyId) => {
    try{
        let selectQuery = 'SELECT users.username comments.comment_body, comments.album_id FROM comments INNER JOIN users ON users.id=comments.commenter_id WHERE (spotify_id= $1 AND comments.is_deleted= false)'

        const commentsOfAlbum = await db.any(selectQuery, [spotifyId])
        return commentsOfAlbum
    }catch(error){
        console.log('err', error)
    }
}
addNewComment = async (comment) => {
    try{
        insertQuery = `INSERT INTO comments(comment_body, commenter_id, album_id, is_deleted) VALUES($/comment_body/, $/commenter_id/, $/album_id/, $/is_deleted/) RETURNING *`

        const newComment = await db.one(insertQuery, {
            comment_body: comment.comment_body,
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
        const deletedComment = await db.one('UPDATE comments SET is_deleted = true WHERE id = $1',[id])
        return deletedComment
    }catch(error){
        console.log('err', error)
    }
}

module.exports = {
    getCommentsByAlbumId,
    getCommentsBySpotifyId,
    addNewComment,
    deleteComment
}