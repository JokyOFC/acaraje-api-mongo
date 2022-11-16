const mongo = require('mongoose');
const Schema = mongo.Schema;

const subReferencesPopulate = require('mongoose-sub-references-populate');

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
                ref: 'product'
            }
        }
    ],
    paymentMethod:{
        type: mongo.Types.ObjectId,
        ref: 'payment',
        default: null,
    },
    base:{
        baseId: {
            type: Schema.Types.ObjectId, 
            ref: 'bases',
            default: null,
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