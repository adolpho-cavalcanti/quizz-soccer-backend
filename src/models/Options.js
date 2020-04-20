const mongoose = require('mongoose');

const Option = new mongoose.Schema(
    {
        opcao: {
            type: String,
            required: true    
        },
        excluido: {
            type: Number,
            required: true
        },
        resposta_certa: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Option", Option);