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
        const albumsbyArtist = await db.any('SELECT * FROM albums WHERE artist = $/artist/')
        return albumsByArtist
    }catch(error){
        console.log('err', error)
    }
}

getLocalAlbumsByUserId = async (userId) => {

}


module.exports = {
    getAllAlbums,

}