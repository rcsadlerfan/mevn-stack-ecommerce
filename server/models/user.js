const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cart'}
});

UserSchema.plugin(plm);

module.exports = mongoose.model('User', UserSchema);