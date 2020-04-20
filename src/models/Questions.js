const mongoose = require('mongoose');

const Question = new mongoose.Schema(
    {
        enunciado: {
            type: String,
            required: true    
        },
        excluido: {
            type: Number,
            required: true
        },
        options: [{ type: mongoose.Schema.Types.ObjectId, ref: "Option" }]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Question", Question);