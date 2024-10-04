import mysql from 'mysql2/promise';


const con = await mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.pwd,
    database: process.env.database
})



console.log (`BD conexão`)

export default con;