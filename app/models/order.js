const mongo = require('mongoose');
const Schema = mongo.Schema;

const orderSchema = new Schema({
    cliente: String,
    products: [
        {
            amount: Number,
            item: {
                type: Schema.Types.ObjectId,
                ref: 'bases.filiais'
            }
        }
    ],
    paymentMethod:{
        paymentId: Number,
        name: String
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