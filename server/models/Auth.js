const db = require('../db/index')
const axios = require('axios')
const qs = require('querystring')
const secrets = require('../../client/src/secrets.js')


 getSpotifyCredentials = async () => {
    try{
        let response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(secrets.data), secrets.config)
        console.log('response =>', response.data)

        if(response.status == 200){
            return response.data
        } else {
            return null
        }

    }catch(error){
        console.log('err', error)
    }
}


module.exports = {
    getSpotifyCredentials
}