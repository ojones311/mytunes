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
        console.log('err', error)
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


module.exports = router 