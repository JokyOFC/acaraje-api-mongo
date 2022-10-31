const mongo = require('mongoose');
const Schema = mongo.Schema;

const baseSchema = new Schema({
    name: String,
    filiais: [{
        type: Schema.Types.ObjectId,
        ref: 'filiais'
    }]
});

module.exports = mongo.model("bases", baseSchema);