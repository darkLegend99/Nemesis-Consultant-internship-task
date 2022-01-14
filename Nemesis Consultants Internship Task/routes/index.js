const express = require('express');

const router = express.Router();

const Users = require('../models/user');
const homeController = require('../controllers/home_controller');
const usersController = require('../controllers/users_controller');

console.log('index router loaded!');

router.get('/', homeController.home);
router.get('/home', homeController.home);
router.use('/users', require('./users'));


module.exports = router;