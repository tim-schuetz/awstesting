import db from '../config/db.js'

export const getusers = async () =>{
    const [users] = await db.query(
        "SELECT name, mail FROM users"
    )
    if(users.length === 0){
        console.error("Users ist leer")
        return []
    } else {
        return users
    }
}
