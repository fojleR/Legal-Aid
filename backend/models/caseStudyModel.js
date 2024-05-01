const mongoose = require('mongoose');

const CaseStudySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true
    },
    userName: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 30
    },
    photo: String,
    headline: String,
    backgroud: String,
    approach:String,
    result: String,
    date: String
})

const caseStudyModel = mongoose.model("CaseStudy", CaseStudySchema);

module.exports = caseStudyModel;