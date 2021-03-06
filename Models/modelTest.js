const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema ({
    projected: {type: Number, default: 0},
    completed: {type: Number, default: 0},
    date: { type: Date, default: Date.now },
}, {timeStamps: false});

const modelTest = mongoose.model('DataModel1', schema);

module.exports = modelTest