const mongo = require('mongoose');
const Schema = mongo.Schema;

const baseSchema = new Schema(
    {
        name: String,
        payments: [
                {
                    name: String,
                }
            ],
        products: [
                {
                    name: String,
                    price: {
                        type: mongo.Types.ObjectId,
                        ref: 'prices'
                    }
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

module.exports = mongo.model("bases", baseSchema);