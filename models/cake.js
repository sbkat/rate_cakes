const mongoose = require('mongoose')

const CakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: [{
        type: String,
        required: false,
    }],
    comment: [{
        type: String,
        required: false,
    }],
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
    },
});

const Cake = mongoose.model('Cake', CakeSchema);

