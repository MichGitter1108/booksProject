const con = require('../utils/connectToDatabase');

//A function that brings all the users from taskusers table from the database
exports.getAllBooks = async (req, res) => 
{
    let allBooks = await con.execute(`SELECT * FROM bookstable`);
    res.send(allBooks[0]);
}

exports.insertBook = async (req, res) => 
{
    let authorID = req.query.authorID;
    let bookName = req.query.bookName;
    let pageNum =  req.query.pageNum;
    let bookPrice =  req.query.bookPrice;

    let insert = await con.execute(`INSERT INTO bookstable(authorID,bookName,pageNum,bookPrice) VALUES (?,?,?,?)`, [authorID,bookName,pageNum,bookPrice])
    res.send(insert[0]);
}