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
            
        let product = await base.products.push({name, price: priceId})
        base.save()

        let productId = base.products[ product - 1 ]
        pricesTab.product = productId.id
        pricesTab.save()
        
        const productPopulated = await Base.findById(BaseId).populate([{path: 'products', populate: {path: 'price', model: 'prices'}}]).exec()

        return res.send(productPopulated);

        // return res.send({})
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