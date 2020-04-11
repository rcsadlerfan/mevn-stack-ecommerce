const express = require('express');
app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const sess = {
    secret: "YEET THIS WILL BE YEETED LATER",
    resave: false,
    saveUninitialized: false
};

app.use(session(sess));
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));
app.use(cors());

mongoose.connect('mongodb://localhost/ecommerce');

app.get('/', (req, res) => {
    res.send('Yeet');
});

app.use('/items', require('./routes/items'));

app.listen(3000);