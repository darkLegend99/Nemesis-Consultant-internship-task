const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
// To extract JWT from header
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const env = require('./environment');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: env.jwt_secret
}

// Payload contains the information of the user.
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){
    User.findById(jwtPayLoad._id, function(err, user){
        if (err){
            console.log("Error in finding user from JWT");
            return;
        }
        if (user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })
}));

module.exports = passport;


// fromAuthHeaderAsBearerToken() method creates a new extractor that looks for the JWT in the authorization header with the scheme 'bearer'.
// The secret key used in password-jwt-strategy.js is 'codeial', jwt.sign(user.toJSON(), 'codeial') will set the token and send it to the user.