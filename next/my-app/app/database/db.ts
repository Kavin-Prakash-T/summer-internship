import {Pool} from "pg"

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

pool.on('error', (err) => {
    console.error('Pool error:', err)
})

pool.on('connect', () => {
    console.log('Connected to database')
})

export default pool;