const express = require('express')
const router = express.Router()

//Home page 

router.get('/' , (req,res,next) => {
    res.send('index: Refer to the readme on how to navigate the routes')
})

router.get('/home', (req,res,next) => {
    res.send('Home Page: This is the home page')
})


module.exports = router ;