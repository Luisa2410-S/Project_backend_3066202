const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASTWORD,
    database: process.env.DB_NAME || 'futbol_equipos',
    waitForConnections: true,
    connectionLimite: 10,
    queueLimitit: 0
});
module.exports = pool;
