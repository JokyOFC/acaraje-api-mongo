const Base = require('../../models/base');

module.exports = {
    create : async (req, res) => {
        const { name, filiais } = req.body
        const base = await Base.create({name, filiais})
        return res.send(base);
    },
    createFili : async(req, res) => {
        const { baseId, filicod, name } = req.body;
        const base = await Base.findById(baseId);
        const filiais = base.filiais.push({ "filicod": filicod, "name": name })
        base.save()
        return res.send(base)
    },
    find : async(req, res) => {
        const base = await Base.find()
        return res.send(base)
    },
    findById : async(req,res) => {
        const { id } = req.body
        const base = await Base.findById(id);
        return res.send(base)
    },
    findFiliById : async(req, res) => {
        const { BaseId, FiliId } = req.body
        const base = await Base.findById(BaseId)
        let filiais = base.filiais
        const filifilter = filiais.filter(x => x.filicod === FiliId)
        return res.send(filifilter)
    },
    delete : async (req, res) => {
        const { id } = req.body
        const base = await Base.deleteOne({ id: id })
        return res.send(base)
    },

    update : async (req, res) => {
        
    }

}