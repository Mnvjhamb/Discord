const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type : String
    },
    password: {
        type: String
    },
    email: {
        type: String,
        uniqe: true
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;