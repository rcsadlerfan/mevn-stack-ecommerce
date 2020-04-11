const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    items: [{type: mongoose.Schema.Types.ObjectID, ref: 'Item'}]
});

module.exports = mongoose.model('Cart', CartSchema);