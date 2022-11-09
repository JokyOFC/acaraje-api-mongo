const mongo = require('mongoose');
const Schema = mongo.Schema;

const baseSchema = new Schema(
    {
        name: String,
        payments: [
                {
                    paymentId: Number,
                    name: String
                }
            ],
        products: [
                {
                    productId: Number,
                    nam: String,
                    price: Number,
                }
            ],
        filiais: [
            {
                filicod: Number,
                name: String,
            }
        ]
    }
);

mongo.model('filiais', baseSchema.filiais)

module.exports = mongo.model("bases", baseSchema);