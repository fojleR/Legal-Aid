const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    firstName: String,
    secondName: String,
    email: String,
    phoneNumber:String,
    message:String
})

const QuestionModel = mongoose.model("Question", QuestionSchema);

module.exports = QuestionModel;