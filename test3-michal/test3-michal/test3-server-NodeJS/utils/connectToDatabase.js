var mysql = require('mysql2');

var con = mysql.createConnection(
{
    host: "localhost",
    user: "root",
    password: "",
    database: "books_list_db" //change the name of the database according to the database
});

module.exports = con.promise();