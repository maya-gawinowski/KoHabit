const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
database:"Kohabit" 
})

module.exports = db;
