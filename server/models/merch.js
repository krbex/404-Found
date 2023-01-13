const mongoose = require('mongoose');

const { Schema } = mongoose;


let merchSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
});

const Merch = mongoose.model('Merch', merchSchema);

module.exports = Merch;