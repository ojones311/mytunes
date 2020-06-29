const express = require('express');
const router = express.Router();
const Genres = require('../models/Genres')

router.get('/', (req, res, next) =>{
    res.send('users rt: Refer to the README on how to navigate routes')
})

router.get('/all', async (req, res, next) => {
    try{
        const allGenres = await Genres.getAllGenres()
        res.json({
            payload: allGenres,
            msg: 'Retrieving all genres',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Error retrieving genres',
            err: true
        })
    }
})

router.post('/', async (req, res, next) => {
    const {genre_name} = req.body
    try{
        let genre = {
            genre_name
        }
        const newGenre = await Genres.addNewGenre(genre)
        res.json({
            payload: newGenre,
            msg: 'User added new genre to db',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Error adding new genre',
            err: true
        })
    }
})

router.patch('edit/:id', async (req, res, next) => {
    const {genre_name} = req.body
    const {id} = req.params
    try{
        let genre = {
            genre_name,
            id
        }
        const editedGenre = Genres.editGenre(genre)
        res.json({
            payload: editedGenre,
            msg: `Genre changed to ${genre_name}`,
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg:'Error editing genre',
            err: true
        })
    }
})
module.exports = router 