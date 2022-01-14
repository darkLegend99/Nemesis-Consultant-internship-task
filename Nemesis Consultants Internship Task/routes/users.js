const express = require('express');
const router = express.Router();
const passport = require('passport');

const userDetailController = require('../controllers/userDetail_controller');

const usersController = require('../controllers/users_controller');
console.log('User router loaded!');

router.get('/profile/:id', usersController.profile);
router.post('/update/:id', usersController.update);


router.get('/createUser', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
 ) , usersController.createUser);

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

router.post('/create', usersController.create);

console.log('User Data router loaded!');

router.post('/createUserDetail', passport.checkAuthentication , userDetailController.createUserDetail);
router.get('/destroyUserDetails/:id', passport.checkAuthentication, userDetailController.destroyUserDetails);

// use passport as middleware to authenticate
router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
 ) ,usersController.createSession);

router.get('/sign-out', usersController.destroySession);

// google-oauth

// url to request user's data
router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
// url at which we'll receive the data
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/users/sign-in'}), usersController.createSession);



module.exports = router;