const mongo = require('mongoose');
const Schema = mongo.Schema;

// TO-DO make a simple subdoc as a product price schema

/*
    {
        price: {
            tables: [
                base: '_id',
                tablePrice : [
                        {
                            product: '_id',
                            price : Number,
                            createdAt: 'date'
                            _id: '_id"
                        },
                    {
                        product: '_id',
                        price : Number,
                        createdAt: 'date'
                    }
                ],
                tablePrice: [
                    "_id": 'id",
                    {
                        product: '_id',
                        price : Number,
                        createdAt: 'date'
                    },
                    {
                        product: '_id',
                        price : Number, 
                        createdAt: 'date'
                    }
                ]
            ]
            _id: ''
        }
    }
*/

const paymentSchema = new Schema({
    product: {
        type: mongo.Types.ObjectId,
        ref: 'product',
        default: null
    },
    price: Number,
    priceEvent: Number,
});

module.exports = mongo.model("prices", paymentSchema);