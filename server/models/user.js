const mognoose = require('mongoose');
const plm = require('passport-local-mongoose');

const UserSchema = new mognoose.Schema({
    username: String,
    password: String,
    cart: {type: mognoose.Schema.Types.ObjectId, ref: 'Cart'}
});

UserSchema.plugin(plm);

module.exports = mongoose.module('User', UserSchema);