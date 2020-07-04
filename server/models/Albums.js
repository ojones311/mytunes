const db = require('../db/index')

getAllAlbums = async () => {
    try{
        const albums = await db.any('SELECT * FROM albums')
        return albums 
    }catch(error){
        console.log('err', error)
    }
}

getLocalAlbumsByArtist =  async (artist) => {
    try{
        const albumsByArtist = await db.any('SELECT * FROM albums WHERE artist = $1', [artist])
        return albumsByArtist
    }catch(error){
        console.log('mod err', error)
    }
}

getLocalAlbumsByUserId = async (userId) => {
    try{
        const albumsByUserId = await db.any('SELECT * FROM albums WHERE user_id = $1', [userId])
        return albumsByUserId 
    }catch(error){
        console.log('err', error)
    }
}

getLocalAlbumsByGenreId = async (genreId) => {
    try{
        const albumsByGenreId = await db.any('SELECT * FROM albums WHERE genre_id = $1', [genreId])
        return albumsByGenreId
    } catch(error){
        console.log('err', error)
    }
}

addAlbumToProfile = async (album) => {
    try{
        insertQuery = 'INSERT INTO albums(spotify_id, title, artist, album_img_url, user_id, genre_id) VALUES ($/spotify_id/, $/title/, $/artist/, $/album_img_url/, $/user_id/, $/genre_id/) RETURNING *'
        const newAlbum = await db.one(insertQuery, {
            spotify_id: album.spotify_id,
            title: album.title,
            artist: album.artist,
            album_img_url: album.album_img_url,
            user_id: album.user_id,
            genre_id: album.genre_id
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
    addAlbumToProfile
}