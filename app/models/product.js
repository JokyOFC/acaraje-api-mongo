const mongo = require('mongoose');
const Schema = mongo.Schema;

const productSchema = new Schema({
    name: String,
    price: {
        type: mongo.Types.ObjectId,
        ref: 'prices'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongo.model("product", productSchema);