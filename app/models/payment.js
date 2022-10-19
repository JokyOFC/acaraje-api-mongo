const mongo = require('mongoose');
const Schema = mongo.Schema;

const paymentSchema = new Schema({
    name: String,
});

module.exports = mongo.model("payment", paymentSchema);