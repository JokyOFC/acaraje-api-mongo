const mongo = require('mongoose');
const Schema = mongo.Schema;

const orderSchema = new Schema({
    cliente: String,
    products: [{
        quantity: Number,
        item: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    }],
    paymentMethod:{ 
        type: Schema.Types.ObjectId, ref:'payment',
    },
    base:{ 
        type: Schema.Types.ObjectId, ref: 'bases',
    },
    total: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongo.model("order", orderSchema);