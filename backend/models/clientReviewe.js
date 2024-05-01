const mongoose = require('mongoose');

const clientreviewSchema = new mongoose.Schema({
    email:String,
    name: String,
    photo: String,
    designation: String,
    review: String
})

const clientreviewModel = mongoose.model("clientreview", clientreviewSchema);

module.exports = clientreviewModel;