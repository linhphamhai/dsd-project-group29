var mySql = require('mysql');

var pool = mySql.createPool({
    host : 'localhost',
    database: 'dsd',
    user : 'root',
    password : 'admin',
    port : 3306
});

module.exports = pool;