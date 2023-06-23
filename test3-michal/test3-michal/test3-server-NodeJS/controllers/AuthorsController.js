const con = require('../utils/connectToDatabase');

//A function that brings all the users from taskusers table from the database
exports.getAllAuthors = async (req, res) => 
{
    let allAuthors = await con.execute(`SELECT * FROM authorstable`);
    res.send(allAuthors[0]);
}