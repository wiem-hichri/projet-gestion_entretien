const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    date: {
        type: String,
        required: [true, "Date is required"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
        
    },
    recruiterId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Recruiter', 
        required: [true, "Recruiter reference is required"], 
    },
    candidateId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Candidat', 
        required: [true, "Candidat reference is required"], 
    },
    feedback: [{type:String}]
    
}, {
    timestamps: true, 
});

const Interview = mongoose.model("Interview", userSchema);
module.exports = Interview;
