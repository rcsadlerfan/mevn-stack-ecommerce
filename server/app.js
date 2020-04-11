const express = require('express');
app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const cors = require('cors');
const morgan = require('morgan');
const User = require('./models/user');

const sess = {
    secret: "YEET THIS WILL BE YEETED LATER",
    resave: false,
    saveUninitialized: false
};

app.use(session(sess));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect('mongodb://localhost/ecommerce');

app.get('/', (req, res) => {
    res.send('Yeet');
});

app.use('/items', require('./routes/items'));
app.use('/auth', require('./routes/auth'));

app.listen(3000);