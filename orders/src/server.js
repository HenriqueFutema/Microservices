const express = require("express");
const app = express();

const mongoose = require("mongoose");
const config = require("./config/database");

mongoose.connect(config.url, {
    useNewUrlParser: true
});

app.use(express.json());

app.use(require("./routes"));

app.listen(3002, () => {
    console.log("Orders Porta");
});