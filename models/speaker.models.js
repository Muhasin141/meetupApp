const mongoose = require("mongoose");

const speakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: { 
        type: String,
        required: true,
        trim: true
    },
    photo: { 
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true 
});


const Speaker = mongoose.model("Speaker", speakerSchema);

module.exports = Speaker;