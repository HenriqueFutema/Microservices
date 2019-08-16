const Customer = require('../Models/Customer')

module.exports = {

    async index(req, res) {
        const customers = await Customer.find()
        res.status(200).json(customers)
    },

    async store(req, res) {

        const customer = await Customer.create(req.body)

        res.status(201).json(customer)

    },

    async show(req, res) {

        const customer = await Customer.findById(req.params.id)

        res.status(200).json(customer)

    },

    async destroy(req, res) {

        const customer = await Customer.findByIdAndDelete(req.params.id)

        res.status(200).json("User deletado")

    }

}