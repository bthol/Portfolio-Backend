//start line

//Dependencies
const express = require("express");
const router = express();
const mongoose = require("mongoose");

//Configuration
require("dotenv").config();

//Database (MongoDB Atlas)
const URI = process.env.MONGO_URI
mongoose.connect(URI)

//Modules
const modelTest = require("../Models/modelTest");

//Middleware
router.use(express.json())
router.use(express.urlencoded({extended: true}))


//Data Index (shows data structure)
router.get(`/`, async (req, res) => {
    // const ID = req;
    // res.send(`data index is active`)
    try {
        const data = await modelTest.find();
        res.send({
            success: true,
            data: data
        })
    } catch (err) {
        res.send({
            success: false,
            error: err.message
        })
    }
})

//CRUD Operations
//Create route (enters data using model format into databse)
router.post(`/`, async (req, res) => {
    // const ID = req;
    // res.send(`Create route accessed`)
    try {
        const entry = await modelTest.create(req.body);
        res.send({
            success: true,
            entry: entry
        })
    } catch (err) {
        res.send({
            success: false,
            error: err.message
        })
    }
})

//Read route (shows a datum within the data structure)
router.get(`/:id`, async (req, res) => {
    // const ID = req;
    // res.send(`read route accessed`)
    try {
        const datum = await modelTest.findById(req.params.id)
        if (!datum) {throw new Error("No datum by that ID")}
        res.send({
            success: true,
            datum: datum
        })
    } catch (err) {
        res.send({
            success: false,
            error: err.message
        })
    }
})

//Update route (A.K.A. a PUT request)
router.patch(`/:id`, async (req, res) => {
    // const ID = req;
    // res.send(`Update route accessed`)
    try {
        const datum = await modelTest.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.send({
            success: true,
            datum: datum
        })
    } catch (err) {
        res.send({
            success: false,
            error: err.message
        })
    }
})

//Delete route
router.delete(`/:id`, async (req, res) => {
    // const ID = req;
    // res.send(`Delete route accessed`)
    try {
        const datum = await modelTest.findByIdAndDelete(req.params.id);
        res.send({
            success: true,
            datum: datum
        })
    } catch (err) {
        res.send({
            success: false,
            error: err.message
        })
    }
})

module.exports = router

//end line