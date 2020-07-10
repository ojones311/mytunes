const db = require('../db/index')

getAllAlbums = async () => {
    try{
        const albums = await db.any('SELECT * FROM albums WHERE is_deleted = false')
        return albums 
    }catch(error){
        console.log('err', error)
    }
}

getLocalAlbumsByArtist =  async (artist) => {
    try{
        const albumsByArtist = await db.any('SELECT * FROM albums WHERE (artist = $1 AND is_deleted = false)', [artist])
        return albumsByArtist
    }catch(error){
        console.log('mod err', error)
    }
}

getLocalAlbumsByUserId = async (userId) => {
    try{
        const albumsByUserId = await db.any('SELECT * FROM albums WHERE (user_id = $1 AND is_deleted = false)', [userId])
        return albumsByUserId 
    }catch(error){
        console.log('err', error)
    }
}

getLocalAlbumsByGenreId = async (genreId) => {
    try{
        const albumsByGenreId = await db.any('SELECT * FROM albums WHERE (genre_id = $1 AND is_deleted = false)', [genreId])
        return albumsByGenreId
    } catch(error){
        console.log('err', error)
    }
}

getLocalAlbumByAlbumId = async (albumId) => {
    try{
        const albumById = await db.one('SELECT * FROM albums WHERE (id= $1 AND is_deleted = false)', [albumId])
        return albumById
    }catch(error){
        console.log('err', error)
    }
}

addAlbumToProfile = async (album) => {
    try{
        insertQuery = 'INSERT INTO albums(spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ($/spotify_id/, $/title/, $/artist/, $/album_img_url/, $/user_id/, $/genre_id/, $/is_deleted/) RETURNING *'
        const newAlbum = await db.one(insertQuery, {
            spotify_id: album.spotify_id,
            title: album.title,
            artist: album.artist,
            album_img_url: album.album_img_url,
            user_id: album.user_id,
            genre_id: album.genre_id,
            is_deleted: false
        })
        return newAlbum
    }catch(error){
        console.log('err', error)
    }
}

deleteAlbum = async (id) => {
    try{
        const deletedAlbum = await db.one('UPDATE albums SET is_deleted = true WHERE id = $1', [id])
        return deletedAlbum
    }catch(error){
        console.log('err', error)
    }
}



module.exports = {
    getAllAlbums,
    getLocalAlbumsByArtist,
    getLocalAlbumsByUserId,
    getLocalAlbumsByGenreId,
    getLocalAlbumByAlbumId,
    addAlbumToProfile,
    deleteAlbum
}