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

module.exports = {
    getAllAlbums,
    getLocalAlbumsByArtist,
    getLocalAlbumsByUserId,
    getLocalAlbumsByGenreId
}