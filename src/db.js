const { createPool } = require('mysql2/promise')
require('./config.js')

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.BD_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
})

module.exports = pool;