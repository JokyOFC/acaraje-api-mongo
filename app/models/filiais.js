const mongo = require('mongoose');
const Schema = mongo.Schema;

const baseSchema = new Schema({
    filicod: Number,
    name: String,
});

module.exports = mongo.model("filiais", baseSchema);