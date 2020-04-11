const express = require('express');
app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const Item = require('./models/item');

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

app.get('/items', (req, res) => {
    Item.find({}, (err, items) => {
        if (err) { 
            console.log(err);
        } else {
            res.send(items);
        }
    });
});

app.post('/items', (req, res) => {
    Item.create({name: req.body.name, price: req.body.price, image: req.body.image, description: req.body.description}, (err, item) => {
        if (err) {
            console.log(item);
        } else {
            res.redirect('/items');
        }
    });
});

app.listen(3000);