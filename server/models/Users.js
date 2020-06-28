const db = require('../db/index')


getAllUsers = async () =>{
    try{
        const allUsers = await db.any('SELECT * FROM users')
        return allUsers 
    }catch(error){
        console.log('err', error)
    }
}

getUserById = async (id) => {
    try{
        const userById = await db.one('SELECT * FROM users WHERE id= $1', [id]) 
        return userById
    }catch(error){
        console.log('err',error)
    }
}

createNewUser = async (user) => {
    try{
       let createdUser = await db.any('SELECT * FROM users WHERE username = $/username/', user)
        if(createdUser){
            console.log(createdUser)
        }
        const insertQuery = 'INSERT INTO users(username, avatar_url) VALUES ($/username/, $/avatar_url/) RETURNING *'
        let newUser = await db.one(insertQuery, {
            username: user.username,
            avatar_url: user.avatar_url
        })
        console.log(user)
        return user
    }catch(error){
        console.log('err', error)
    }
}

editUserInfo = async (user) => {
    try{
       let editUserInfo = await db.none(`UPDATE users SET username = $1, avatar_url = $2 WHERE id= $3`, [user.username, user.avatar_url, user.id])
       return editUserInfo
    }catch(error){
        console.log('err', error)
    }
}



module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    editUserInfo
}