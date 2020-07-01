const express = require('express');
const router = express.Router();
const Users = require('../models/Users')

router.get('/', (req, res, next) =>{
    res.send('users rt: Refer to the README on how to navigate routes')
})

router.get('/all', async (req, res, next) => {
    try {
        const users = await Users.getAllUsers()
        res.json({
            payload: users,
            msg: 'Retrieving all users',
            err: false
        })
    } catch(error){
        console.log('err', err)
        res.json({
            msg: 'Error retrieving users',
            err: true
        })
    }
})

router.get('/id/:id', async (req, res, next) => {
    const {id} = req.params
    try{
        const userById = await Users.getUserById(id)
        res.json({
            payload: userById,
            msg: 'Retrieving user by id',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Error retrieving user by id',
            err: true
        })
    }
})

router.get('/album/:id', async (req, res, next) => {
    const {id} = req.params
    try{
        const usersByAlbum = await Users.getUsersByAlbum(id)
        res.json({
            payload: usersByAlbum,
            msg: 'Success. Users retrieved',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg: 'Couldnt get users by album',
            err: true
        })
    }
})

router.post('/', async (req, res, next) => {
    const {username, avatar_url} = req.body 
    try{
        let user = {
            username,
            avatar_url
        }
        const createdUser = await Users.createNewUser(user)
        res.json({
            payload: createdUser,
            msg: 'User created and added to storage',
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            msg:'Error adding new user',
            err: true
        })
    }
})

router.patch('/edit/:id', async (req, res, next) => {
    const {username, avatar_url} = req.body
    const {id} = req.params
    try{
        
        let user = {
            username,
            avatar_url,
            id
        }
        if(!user.avatar_url){
            user.avatar_url = ''
        }
        const changedUser = await Users.editUserInfo(user)
        res.json({
            payload: changedUser,
            msg: `Edited user ${user.username} info`,
            err: false
        })
    }catch(error){
        console.log('err', error)
        res.json({
            message: 'Cannot edit user info something went wrong',
            err: true
        })
    }
})
module.exports = router 