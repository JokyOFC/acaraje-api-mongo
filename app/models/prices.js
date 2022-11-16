const mongo = require('mongoose');
const Schema = mongo.Schema;

const paymentSchema = new Schema({
    product: {
        type: mongo.Types.ObjectId,
        ref: 'bases.products',
        default: null
    },
    price: Number,
    priceEvent: Number,
});

module.exports = mongo.model("prices", paymentSchema);