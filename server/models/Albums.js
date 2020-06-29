const db = require('../db/index')

getAllAlbums = async () => {
    try{
        const albums = await db.any('SELECT * FROM albums')
    }catch(error){
        console.log('err', error)
    }
}