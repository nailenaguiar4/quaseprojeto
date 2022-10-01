const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProdutoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    categoria: [{ type: Schema.Types.ObjectId, ref: 'produto' }]

    
});

module.exports = mongoose.model('producto', ProdutoSchema);