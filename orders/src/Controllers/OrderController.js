const Order = require("../Models/Order");
const axios = require("axios");

module.exports = {
    async store(req, res) {
        const order = await Order.create(req.body);

        res.status(201).json(order);
    },

    async index(req, res) {
        const orders = await Order.find();

        res.status(200).json(orders);
    },

    async show(req, res) {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ error: "Order não encontrada" });
        }

        const customer = await axios.get(
            `http://localhost:3001/customer/${order.customerId}`
        );

        const book = await axios.get(`http://localhost:3000/book/${order.bookId}`);

        const orderObject = {
            customerName: customer.data.name,
            bookTitle: book.data.title,
            initialDate: order.initialDate,
            deliveryDate: order.deliveryDate
        };

        return res.status(200).json(orderObject);
    }
};