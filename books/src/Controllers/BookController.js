const Book = require('../Models/Book')

module.exports = {

    async index(req, res) {
        const books = await Book.find()
        res.status(200).json(books)
    },

    async store(req, res) {

        const book = await Book.create(req.body)

        res.status(201).json(book)

    },

    async show(req, res) {

        const book = await Book.findById(req.params.id)

        res.status(200).json(book)

    }

}