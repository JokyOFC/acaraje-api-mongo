const mongo = require('mongoose');
const Schema = mongo.Schema;

const baseSchema = new Schema(
    {
        name: String,
        filiais: [
            {
                filicod: Number,
                name: String,
                payments: [
                    new Schema({
                        paymentId: Number,
                        name: String
                    })
                ],
                products: [
                    new Schema({
                        productId: Number,
                        name: String,
                        price: Number,
                    })
                ],
            }
        ]
    }
);

mongo.model('filiais', baseSchema.filiais)

module.exports = mongo.model("bases", baseSchema);