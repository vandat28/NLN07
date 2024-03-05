const mysql = require('mysql2');

const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "thienthien2",
    database: "healpro"
});

module.exports = con 