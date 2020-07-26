const db = require('../db/index')

getAllAlbums = async () => {
    try{
        let query = 'SELECT * FROM albums'

        const albums = await db.any(query)
        return albums 
    }catch(error){
        console.log('err', error)
    }
}

getLocalAlbumsByArtist =  async (artist) => {
    try{
        let query = 'SELECT albums.id, albums.title, albums.artist, album_img_url, users_albums.user_id, users_albums.is_deleted FROM albums FULL OUTER JOIN users_albums ON albums.id=users_albums.album_id WHERE (artist=$1 AND is_deleted=false)'

        const albumsByArtist = await db.any(query, [artist])
        return albumsByArtist
    }catch(error){
        console.log('mod err', error)
    }
}

getLocalAlbumsByUserId = async (userId) => {
    try{
        let query = 'SELECT albums.id, albums.title, albums.artist, album_img_url, users_albums.user_id, users_albums.is_deleted FROM albums FULL OUTER JOIN users_albums ON albums.id=users_albums.album_id WHERE (user_id=$1 AND is_deleted=false)'

        const albumsByUserId = await db.any(query, [userId])
        return albumsByUserId 
    }catch(error){
        console.log('err', error)
    }
}

getLocalAlbumByAlbumId = async (albumId) => {
    try{
        let query = 'SELECT albums.id, albums.title, albums.artist, album_img_url, users_albums.user_id, users_albums.is_deleted FROM albums FULL OUTER JOIN users_albums ON albums.id=users_albums.album_id WHERE (album_id=$1 AND is_deleted=false)'

        const albumById = await db.one(query, [albumId])
        return albumById
    }catch(error){
        console.log('err', error)
    }
}

addAlbumToProfile = async (album) => {
    try{
        insertQuery = 'INSERT INTO albums(id, title, artist, album_img_url) VALUES ($/id/, $/title/, $/artist/, $/album_img_url/) RETURNING *'
        const newAlbum = await db.one(insertQuery, {
            id: album.id,
            title: album.title,
            artist: album.artist,
            album_img_url: album.album_img_url,
        })
        return newAlbum
    }catch(error){
        console.log('err', error)
    }
}

deleteAlbum = async (albumId, userId) => {
    try{
        const deletedAlbum = await db.one('UPDATE users_albums SET is_deleted = true WHERE (album_id = $1 AND user_id= $2)', [albumId, userId])
        return deletedAlbum
    }catch(error){
        console.log('err', error)
    }
}



module.exports = {
    getAllAlbums,
    getLocalAlbumsByArtist,
    getLocalAlbumsByUserId,
    getLocalAlbumByAlbumId,
    addAlbumToProfile,
    deleteAlbum
}