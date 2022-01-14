const express = require('express');
const router = express.Router();
const passport = require("passport");

const userDetailController = require('../controllers/userDetail_controller');

console.log('User Data router loaded!');

router.post('/createUserDetail', passport.checkAuthentication , userDetailController.createUserDetail);

module.exports = router;