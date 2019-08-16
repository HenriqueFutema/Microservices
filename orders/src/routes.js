const express = require("express");
const routes = express.Router();

const OrderController = require("./Controllers/OrderController");

routes.get("/orders", OrderController.index);
routes.get("/order/:id", OrderController.show);

routes.post("/order", OrderController.store);

module.exports = routes;