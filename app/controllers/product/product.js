const Product = require('../../models/product');
const Base = require('../../models/base');
const prices = require('../../models/prices')

module.exports = {
    create : async (req, res) => {
        const { BaseId, name, price } = req.body

        const pricesTab = await prices.create({
            price: price.price,
            priceEvent: price.priceEvent
        })

        const priceId = pricesTab.id
        const base = await Base.findById(BaseId)
            
        let product = await Product.create({name, price: priceId})
        
        let productId = product.id
        let baseProd = base.products.push({ _id: productId })

        base.save()

        pricesTab.product = productId
        pricesTab.save()
        
        const productPopulated = await Base.findById(BaseId).populate('products', 'payments').exec()

        return res.send(productPopulated);

        // return res.send({})
    },  
    find : async(req, res) => {
        const { BaseId } = req.body
        const base = await Base.findById(BaseId).populate('products')

        await base.populate({ path: 'products', populate: { path: 'price', model: 'prices' } })

        // const payment = await Payment.find()
        const products = base.products

        return res.send(products)
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