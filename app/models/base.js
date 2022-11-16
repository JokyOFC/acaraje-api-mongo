const mongo = require('mongoose');
const Schema = mongo.Schema;

const baseSchema = new Schema(
    {
        name: String,
        payments: [
                {
                    type: mongo.Types.ObjectId,
                    ref: 'payments',
                    default: []
                }
            ],
        products: [
                {
                    type: mongo.Types.ObjectId,
                    ref: 'products',
                    default: []
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