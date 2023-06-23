//A page that calls the functions of users (accessing to users database)
const express = require('express');
const router = express.Router();

//the controller - there will be the database functions
const AuthorsController = require('../controllers/AuthorsController');


//calling the getAllUsers function from the controller
router.get('/getAllAuthors', AuthorsController.getAllAuthors); //localhost:5000/getAllUsers

module.exports = router;