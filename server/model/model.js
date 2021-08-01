const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Place: {
        type: Number,
        required: true,
        unique: true

    },
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
    }
})

const Itdb = mongoose.model('ITdb', schema)
module.exports = Itdb;

var schema2 = new mongoose.Schema({
    Place: {
        type: Number,
        required: true,
        unique: true

    },
    name: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true,
    }
})

const awsDB = mongoose.model('awsDB', schema2)
module.exports = awsDB;