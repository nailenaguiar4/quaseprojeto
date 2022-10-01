const mongoose = require("mongoose");

const ClientesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        requerid: true
    }
});

module.exports = mongoose.model('clientes', ClientesSchema);