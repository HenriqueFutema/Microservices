const express = require('express')
const routes = express.Router()

const CustomerController = require('./Controllers/CustomerController')


routes.get('/customers', CustomerController.index)
routes.get('/customer/:id', CustomerController.show)

routes.post('/customer', CustomerController.store)

routes.delete('/customer/:id', CustomerController.destroy)

module.exports = routes