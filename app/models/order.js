const mongo = require('mongoose');
const Schema = mongo.Schema;

const orderSchema = new Schema({
    cliente: String,
    products: [
        {
            amount: {
                type: Number, 
                default: 0
            },
            item: {
                type: mongo.Types.ObjectId,
                ref: 'bases.products'
            }
        }
    ],
    paymentMethod:{
        type: mongo.Types.ObjectId,
        ref: 'bases.payments'
    },
    base:{
        baseId: {
            type: Schema.Types.ObjectId, 
            ref: 'bases'
        },
        fili: Number
    },
    total: Number,
    finished: Boolean,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongo.model("order", orderSchema);