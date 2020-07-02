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
        const albumsByArtist = await db.any('SELECT * FROM albums WHERE artist = $/artist/', [artist])
        return albumsByArtist
    }catch(error){
        console.log('err', error)
    }
}

getLocalAlbumsByUserId = async (userId) => {
    try{
        const albumsByUserId = await db.one('SELECT * FROM albums WHERE user_id = $/id/', [userId])
        return albumsByUserId 
    }catch(error){
        console.log('err', err)
    }
}


module.exports = {
    getAllAlbums,
    getLocalAlbumsByArtist,
    getLocalAlbumsByUserId
}