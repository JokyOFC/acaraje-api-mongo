const mongo = require('mongoose');
const Schema = mongo.Schema;

const baseSchema = new Schema({
    name: String,
});

module.exports = mongo.model("bases", baseSchema);