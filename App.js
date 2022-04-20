//start line

//Dendencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require('body-parser');

//Middleware
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//Controller indices
const DataControl = require("./Controls/DataControl")
app.use(`/data`, DataControl)

//landing Route
app.get(`/`, (req, res) => {
    const ID = req;
    // res.send("index is active")
    res.redirect(`/data`)
})

module.exports = app.listen(3000, () => {
    console.log("express is online and running")
});

//end line