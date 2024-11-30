const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Candidat name is required"],
    },
    email: {
        type: String,
        required: [true, "Condidat email is required"],
        unique: true, 
    },
    status: {
        type: String,
        enum: ['En attente', 'Accepte', 'Rejete'],
    },
   
}, {
    timestamps: true, 
});

const Candidat = mongoose.model("Condidat", userSchema);
module.exports = Candidat;
