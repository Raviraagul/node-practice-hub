const express = require("express");
// const dotenv = require('dotenv');
require('dotenv').config();
const psql = require('./config/database');

const app = express();
const port = process.env.PORT;

const routes = require('./routes');

app.use('/', routes);

// Test Route - Check PostgreSQL Connection
app.get('/test-db', async (req, res) => {
    try {
        // const result = await psql.query('SELECT NOW()');
        // res.json({ message: "Connected to PostgreSQL!", timestamp: result.rows[0] });
        psql.query('SELECT NOW()', function(err, result){
            if(err){
                console.log("error: "+err);
                
            }
            else{
                res.json({ message: "Connected to PostgreSQL!", timestamp: result.rows[0] });
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database connection failed" });
    }
});

app.listen(port);