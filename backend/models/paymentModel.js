const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    email:String,
    name: String,
    method: String,
    transID: String
})

const paymentModel = mongoose.model("payment", paymentSchema);

module.exports = paymentModel;