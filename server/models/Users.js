const db = require('../db/index')


getAllUsers = async () =>{
    try{
        const allUsers = await db.any('SELECT * FROM users WHERE is_deleted = false')
        return allUsers 
    }catch(error){
        console.log('err', error)
    }
}

getUserById = async (id) => {
    try{
        const userById = await db.one('SELECT * FROM users WHERE (id= $1 AND is_deleted = false)', [id]) 
        return userById
    }catch(error){
        console.log('err',error)
    }
}

getUsersByAlbum = async (album_id) => {
    try{
        const usersAttachedToAlbum = await db.any('SELECT * FROM users_albums WHERE (album_id = $1 AND is_deleted= false)', [album_id])
        return usersAttachedToAlbum 
    }catch(error){
        console.log('err', error)
    }
}

createNewUser = async (user) => {
    try{
       let createdUser = await db.any('SELECT * FROM users WHERE (username = $/username/ AND is_deleted= false', user)
        if(createdUser){
            console.log(createdUser)
        }
        const insertQuery = 'INSERT INTO users(username, avatar_url, is_deleted) VALUES ($/username/, $/avatar_url/, $/is_deleted/) RETURNING *'
        let newUser = await db.one(insertQuery, {
            username: user.username,
            avatar_url: user.avatar_url,
            is_deleted: false
        })
        console.log(user)
        return newUser
    }catch(error){
        console.log('err', error)
    }
}

editUserInfo = async (user) => {
    try{
       let editedUser = await db.none(`UPDATE users SET username = $1, avatar_url = $2 WHERE (id= $3 AND is_deleted= false)`, [user.username, user.avatar_url, user.id])
       return editedUser
    }catch(error){
        console.log('err', error)
    }
}

deleteUser = async (id) => {
    try{
        let deletedUser = await db.one('UPDATE users SET is_deleted = true WHERE id= $2', [id])
        return deletedUser
    }catch(error){
        console.log('err', error)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    getUsersByAlbum,
    createNewUser,
    editUserInfo,
    deleteUser
}