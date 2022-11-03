const mongo = require('mongoose');
const Schema = mongo.Schema;

const baseSchema = new Schema({
    name: String,
    filiais: [{
        filicod: Number,
        name: String
    }]
});

module.exports = mongo.model("bases", baseSchema);