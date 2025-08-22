import express from 'express'
import cors from 'cors'
import { getusers } from './controllers/userController.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) =>{
    res.json({ message: 'Test erfolgreich' })
})

app.get('/getusers', getusers)

export default app

