const Order = require('../../models/order');
const payment = require('../payment/payment');

module.exports = {
    post : async(req, res) => {
        const { cliente, products, paymentMethod, base, total } = req.body
        const order = await Order.create({
            cliente,
            products,
            paymentMethod,
            base,
            total
        })
        return res.send(order)
    },

    find : async(req, res) => {
        const order = await Order.find().populate(['paymentMethod','base', { path: 'products', populate: { path: 'item', model: 'product' } }]).exec();
        return res.send(order)
    },

    orderByDate : async(req, res) => {
        const { date } = req.body
        const order = await Order.find().sort({datefield: -1}, function(err, cursor){
            console.log(err);
        })
        return res.send(order)
    },

    findByDate: async(req, res) => {
        const { date } = req.body;
        const order = await Order.find({"createdAt" : new ISODate(date) }).sort({datefield: -1});
    
        return res.send(order)
    },

    findByBase: async(req, res) => {
        const { id } = req.body;
        const order = await Order.find({})
    },

    findByBaseNow: async(req, res) => {
        const { id } = req.body;
        const order= await Order.find({})
    },

    cancel : async(req, res) => {
        const { id } = req.body;
        const order = await Order.deleteOne({ _id: id })
        return res.send(order)
    }

}