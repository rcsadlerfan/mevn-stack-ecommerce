const express = require('express');
const router = express.Router();
const Item = require('./models/item');

router.get('/', (req, res) => {
    Item.find({}, (err, items) => {
        if (err) { 
            console.log(err);
        } else {
            res.send(items);
        }
    });
});

router.post('/', (req, res) => {
    Item.create({name: req.body.name, price: req.body.price, image: req.body.image, description: req.body.description}, (err, item) => {
        if (err) {
            console.log(item);
        } else {
            res.redirect('/items');
        }
    });
});

module.exports = router;