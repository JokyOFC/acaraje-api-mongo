const Prices = require('../../models/prices');

module.exports = {
    create : async(req, res) => {

        // const { productId, price, priceEvent } = req.body

        // const prices = await Prices.create({ 
        //     product: productId,
        //     price,
        //     priceEvent
        //  })

        //  return res.send(prices);

    },
    find : async(req, res) => {

        const prices = Prices.find()
        return res.send(prices)

    },
    update : async(req, res) => {



    },
    delete : async(req, res) => {

    }
}