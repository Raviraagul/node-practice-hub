const { Pool } = require('pg');
require('dotenv').config();

// PostgreSQL Connection
const psql = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

// psql.connect()
//     .then(() => console.log("Connected to PostgreSQL"))
//     .catch(err => console.error("PostgreSQL Connection Failed:", err));

module.exports = psql ;