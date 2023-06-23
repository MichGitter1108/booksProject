//A page that calls the functions of users (accessing to users database)
const express = require('express');
const router = express.Router();

//the controller - there will be the database functions
let BooksController = require('../controllers/BooksController');


//calling the getAllBooks function from the controller
router.get('/getAllBooks', BooksController.getAllBooks); //localhost:5000/getAllUsers
router.get('/insertBook', BooksController.insertBook);

module.exports = router;