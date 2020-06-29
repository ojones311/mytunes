const db = require('../db/index')

getCommentsByAlbumId = async (album_id) => {
    try{
        let selectQuery = 'SELECT users.username, comments.comment_body, comments.album_id FROM comments INNER JOIN users ON users.id=comments.commenter_id WHERE album_id= $1'
        const albumComments = await db.any(selectQuery,[album_id])
        return albumComments
    }catch(error){
        console.log('err', error)
    }
}