const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

// Authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email',
    passReqToCallback: true
    }, function(req, email, password, done){
        // Find the user and establish the identity
        User.findOne({email: email}, function(err, user){
            if(err){
                console.log('Error in finding user --> Passport');
                req.flash('error', err);
                return done(err);
            }
            if(!user || user.password != password){
                console.log('Invalid Username/Password');
                req.flash('error','invalid username/password');
                return done(null, false);
            }
            return done(null, user);
        });
    }
));


passport.serializeUser(function(user, done){
    // set user to cookie
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }
        return done(null, user);
    });
});

// Check if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed in, then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();
    }
    // if user is not signed in
    return res.redirect('/users/sign-in');
};

passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
        // req.user contains the current signed in user from the session cookie and we are just sending this to the locals for the views.
        res.locals.user = req.user;
    }
    next();
};

module.exports = passport;