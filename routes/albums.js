const express = require('express');
const router = express.Router();
const Albums = require('../models/Albums')
// const Auth = require('../server/models/Auth')

router.get('/', (req, res, next) =>{
    res.send('users rt: Refer to the README on how to navigate routes')
})

//use pagination to limit data from queries 
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

router.get('/artist/:artist', async (req, res, next) => {
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

router.get('/albumId/:id', async (req, res, next) => {
    const {id} = req.params
    try{
        const albumById = await Albums.getLocalAlbumByAlbumId(id)
        res.json({
            payload: albumById,
            msg: 'Retrieving album by id',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Error couldnt get album by id',
            err: true
        })
    }
})

router.post('/', async (req, res, next) => {
    const {id, user_id, title, artist, album_img_url} = req.body

    try{
        let album = {
            id, user_id, title, artist, album_img_url
        }

        let newAlbum = await Albums.addAlbumToProfile(album)
        let albumRelation= await Albums.createRelationInUserAlbums(album)

        res.status(201).json({
            payload: {newAlbum, albumRelation},
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

router.get('/relations',  async (req, res, next) => {
    try{
        const albumRelation = await Albums.getAllRelations()
        res.json({
            payload: albumRelation,
            msg: 'Getting all album relations',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg:'Error getting all relations',
            err: true
        })
    }
})

router.get('/relations/undeleted',  async (req, res, next) => {
    try{
        const undeletedAlbumRelation = await Albums.getUndeletedAlbumsOtherUsersOwn()
        res.json({
            payload: undeletedAlbumRelation,
            msg: 'Getting all album relations that are undeleted',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg:'Error getting all undeleted relations',
            err: true
        })
    }
})

router.patch('/delete/:albumId/:userId', async (req, res, next) => {
    const {albumId, userId} = req.params
    try{
        const deleteAlbum = await Albums.deleteAlbum(albumId,userId)
        res.json({
            payload: deleteAlbum,
            msg: 'Success. Deleted album',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Error trying to delete album',
            err: true
        })
    }
})


module.exports = router 