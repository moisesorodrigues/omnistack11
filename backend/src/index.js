const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Query params (?nome=Moisés)
 * Route params (/users/1)
 * Request params ({"nome": "Moisés"})
 */

/**
 * SQL: MySQL, SQLite e Oracle
 * NoSQL: MongoDB
 */

/**
 * Driver: select * from users
 * Query builder: table('users').select('*')
 */

app.listen(3333);