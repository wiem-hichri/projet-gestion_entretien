const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Recruiter name is required"],
    },
    email: {
        type: String,
        required: [true, "Recruiter email is required"],
        unique: true, 
    },
    password: {
        type: String,
        required: [true, "Recruiter password is required"],
        unique: true, 
    },

    
    
}, {
    timestamps: true, 
});

const Recruiter = mongoose.model("Recruiter", userSchema);
module.exports = Recruiter;
