const express = require('express')
const routes = express.Router()

const BookController = require('./Controllers/BookController')

routes.get('/', (req, res) => {
    res.send('test')
})

routes.get('/books', BookController.index)
routes.get('/book/:id', BookController.show)

routes.post('/book', BookController.store)

module.exports = routes