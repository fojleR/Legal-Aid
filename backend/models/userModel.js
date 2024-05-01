const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    password:{
        type: String,  // Corrected the typo here (changed 'tyep' to 'type')
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    confirmPassword:{
        type: String,  // Corrected the typo here (changed 'tyep' to 'type')
        required: true,
        minlength: 3,
        maxlength: 1024
    },
    paidUser: Boolean
})

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;