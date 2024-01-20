const mongoose = require('mongoose');

const AdvocateSchema = new mongoose.Schema({
    photo: String,
    email: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200,
        unique: true
    },
    name: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 30
    },
    password:{
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    confirmPassword:{
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    speciality: {
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    courtType: {
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    education: {
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    membership: {
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    location: {
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    experience: {
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    mobileConsultation: {
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    chamberConsultation: {
        type: String,  
        required: true,
        minlength: 3,
        maxlength: 1024
    }
})

const advocateModel = mongoose.model("Advocate", AdvocateSchema);

module.exports = advocateModel;