//start line

// Dendencies
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser');

//Middleware
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

//Controller indices
const controlTest = require("./Controls/controlTest");
server.use(`/test`, controlTest);
const controller1 = require("./Controls/controller1");
server.use(`/data`, controller1);

//landing Route
server.get(`/`, (req, res) => {
    res.send("Landing Route Accessed")
    // res.redirect(`/data`)
})

//Database Error Handling
mongoose.connection.on(`error`, (error) => console.error(error));
mongoose.connection.once(`open`, () => console.log("MongoDB connected"));

module.exports = server.listen(3000, () => {
    console.log("Express.js is online and running")
});

//end line