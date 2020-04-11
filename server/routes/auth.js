const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');

router.get('/login', (req, res) => {
    res.send('Login page');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
}), (req, res) => {});

router.get('/register', (req, res) => {
    res.send('Register page');
});

router.post('/register', (req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/auth/login');
        }
    });
});

router.get('/logout', (req, res) => {
    req.logout();
});

module.exports = router;