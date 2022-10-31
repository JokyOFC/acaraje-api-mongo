const Base = require('../../models/base');

module.exports = {
    create : async (req, res) => {
        const { name } = req.body
        const base = await Base.create({name})
        return res.send(base);
    },
    find : async(req, res) => {
        const base = await Base.find().populate(['filicod','name']).exec();
        return res.send(base)
    },
    delete : async (req, res) => {
        const { id } = req.body
        const base = await Base.deleteOne({ id: id })
        return res.send(base)
    }
}