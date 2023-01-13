const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    boughtGame1: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame2: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame3: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame4: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame5: {
        type: Boolean,
        required: true,
        trim: true,
    },
    boughtGame6: {
        type: Boolean,
        required: true,
        trim: true,
    },
});


const User = mongoose.model('User', userSchema);

module.exports = User;