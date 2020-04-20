const mongoose = require('mongoose');

const Test = new mongoose.Schema(
    {
        qtd_acertos: {
            type: Number,
            required: true    
        },
        excluido: {
            type: Number,
            required: true
        },
        status: {
            type: Number,
            required: true
        } //Staus > 5: User init, Status > 7: Bronze, Status > 9: Silver, User==10: Gold
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Test", Test);