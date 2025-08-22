import mysql from 'mysql2'
import dotenv from "dotenv"

dotenv.config({
    path: `.env.${process.env.NODE_ENV || "development"}`
})

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS
})

const promisePool = pool.promise()

export default promisePool
