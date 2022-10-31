const { db } = require('../../models/filiais');
const Fili = require('../../models/filiais');

module.exports = {
    create : async (req, res) => {
        const { name } = req.body
        const base = await Base.create({
            filicod: db.collection.length(),
            name
        })
        return res.send(base);
    },

    find : async(req, res) => {
        const fili = await Fili.find()
        return res.send(fili)
    },
    delete : async (req, res) => {
        const { id } = req.body
        const fili = await Fili.deleteOne({ id: id })
        return res.send(fili)
    }
}