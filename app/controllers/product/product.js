const Product = require('../../models/product');

module.exports = {
    create : async (req, res) => {
        const { name, price } = req.body
        const product = await Product.create({name, price})
        return res.send(product);
    },
    find : async(req, res) => {
        const product = await Product.find()
        return res.send(product)
    },
    delete : async (req, res) => {
        const { id } = req.body
        const product = await Product.findByIdAndDelete(id)
        return res.send(product)
    }
}