const express = require('express');
const router = express.Router();
const Albums = require('../models/Albums')

router.get('/', (req, res, next) =>{
    res.send('users rt: Refer to the README on how to navigate routes')
})

router.get('/all', async (req, res, next) => {
    try{
        const albums = await Albums.getAllAlbums()
        res.json({
            payload: albums,
            msg: 'Retrieving albums from db',
            err: true
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Error. Couldnt retrieve albums.',
            err: true
        })
    }
})

router.get('/artist/:artist', async (req,res,next) => {
    const {artist} = req.params
    try{
        const albumByArtist = await Albums.getLocalAlbumsByArtist(artist)
        res.json({
            payload: albumByArtist,
            msg: 'Retrieving local albums by artist',
            err: false
        })
    }catch(error){
        console.log('rt err', error)
        res.json({
            msg: 'Error retrieving local albums'
        })
    }
})

router.get('/userid/:userId', async (req, res, next) => {
    const {userId} = req.params
    try{
        const albumByUserId = await Albums.getLocalAlbumsByUserId(userId)
        res.json({
            payload: albumByUserId,
            msg: 'Retrieving local albums by id',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Failed to retrieve local albums by id',
            err: true
        })
    }
})

router.get('/genreid/:genreId', async (req, res, next) => {
    const {genreId} = req.params
    try{
        const albumsByGenreId = await Albums.getLocalAlbumsByGenreId(genreId)
        res.json({
            payload: albumsByGenreId,
            msg: 'Retrieving local albums by genre',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Error retrieving albums by genreId',
            err: true
        })
    }
})

router.post('/', async (req, res, next) => {
    const {spotify_id, title, artist, album_img_url, user_id, genre_id} = req.body

    try{
        let album = {
            spotify_id, title, artist, album_img_url, user_id, genre_id
        }
        let newAlbum = await Albums.addAlbumToProfile(album)
        res.json({
            payload: newAlbum,
            msg: 'Posted a new album to the db',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Error posting a new album',
            err: true
        })
    }
})

module.exports = router 