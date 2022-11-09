const Product = require('../../models/product');
const Base = require('../../models/base');

module.exports = {
    create : async (req, res) => {
        const { BaseId, FiliId, productId, name, price } = req.body
        const base = await Base.findById(BaseId)
        const filial = base.filiais.find((filial) => filial.filicod == FiliId)
        
        filial.products.push({productId, name, price})

        base.save()

        return res.send(filial);
    },
    find : async(req, res) => {
        const { BaseId, FiliId } = req.body
        const base = await Base.findById(BaseId)
        const filial = await base.filiais.find((filial) => filial.filicod == FiliId)

        // const payment = await Payment.find()
        const product = filial.products

        return res.send(product)
    },

    // TO DO

    delete : async (req, res) => {
        const { id } = req.body
        const product = await Product.findByIdAndDelete(id)
        return res.send(product)
    },
    update : async (req, res) => {
        
    }
}