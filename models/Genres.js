const db = require('../db/index')

getAllGenres = async () => {
    try{
        const allGenres = await db.any('SELECT * FROM genres')
        return allGenres
    }catch(error){
        console.log('err', error)
    }
}

addNewGenre = async (genre) => {
    try{
        const insertQuery = 'INSERT INTO genres(genre_name) VALUES($/genre_name/)RETURNING *'
        let addNewGenre = await db.one(insertQuery, {
            genre_name: genre.genre_name
        })
        return addNewGenre
    }catch(error){
        console.log('err', err)
    }
}

editGenre = async (genre) => {
    try{
        let editedGenre = await db.none('UPDATE genres SET genre_name = $1 WHERE id = $2', [genre.genre_name, genre.id])
        return editedGenre
    }catch(error){
        console.log('err', error)

    }
}



module.exports = {
    getAllGenres,
    addNewGenre,
    editGenre
}