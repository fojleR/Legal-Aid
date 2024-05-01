const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
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
    designation: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 30
    },
    photo: String,
    reviewTitle: String,
    review: String
    
})

const TestimonialModel = mongoose.model("Testimonial", TestimonialSchema);

module.exports = Testimonial;