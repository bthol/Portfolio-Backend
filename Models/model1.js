const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema ({
    projected: {type: Number, default: 0},
    completed: {type: Number, default: 0},
    date: { type: Date, default: Date.now },
}, {timeStamps: false});

const Model1 = mongoose.model('Model1', schema);

module.exports = Model1