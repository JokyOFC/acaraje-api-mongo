const Base = require('../../models/base');

module.exports = {
    create : async (req, res) => {
        const { name, filiais } = req.body
        const base = await Base.create({name, filiais})
        return res.send(base);
    },
    find : async(req, res) => {
        const base = await Base.find();
        return res.send(base)
    },
    findById : async(req,res) => {
        const { id } = req.body
        const base = await Base.findById(id);
        return res.send(base)
    },
    delete : async (req, res) => {
        const { id } = req.body
        const base = await Base.deleteOne({ id: id })
        return res.send(base)
    }
}