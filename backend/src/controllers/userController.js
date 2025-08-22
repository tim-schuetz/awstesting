import * as userService from '../services/userService.js'

export const getusers = async (req, res) =>{
    try{
        const users = userService.getusers()
        res.status(200).json(users)
    } catch(error) {
        console.error(error)
        res.status(500).json("Fehler in getusers")
    }
}
