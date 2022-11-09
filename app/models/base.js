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
                    {
                        paymentId: Number,
                        name: String
                    }
                ],
                products: [
                    {
                        productId: Number,
                        name: String,
                        price: Number,
                    }
                ],
            }
        ]
    }
);
    


module.exports = mongo.model("bases", baseSchema);