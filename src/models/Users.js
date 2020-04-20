const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true    
        },
        email: {
            type: String,
            required: true    
        },
        tests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Test" }]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", User);