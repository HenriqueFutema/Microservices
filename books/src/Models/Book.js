const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    author: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    numberPages: {
        type: String,
        required: false
    },

    publisher: {
        type: String,
        required: false
    },


})

module.exports = mongoose.model('Book', BookSchema)