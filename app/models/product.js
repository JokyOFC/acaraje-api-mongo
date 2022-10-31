const mongo = require('mongoose');
const Schema = mongo.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    amount: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongo.model("product", productSchema);