const { default: mongoose } = require('mongoose');
const { db } = require('../../models/order');
const order = require('../../models/order');
const Order = require('../../models/order');
const payment = require('../payment/payment');

module.exports = {
    post : async(req, res) => {
        const { cliente, products, paymentMethod, baseId, filicod, total } = req.body
        const order = await Order.create({
            cliente,
            products,
            paymentMethod,
            base: {
                baseId: baseId,
                fili: filicod
            },
            total,
            finished: false,
        })
        return res.send(order)
    },

    find : async(req, res) => {
        const order = await Order.find().populate([{path: 'base', populate: {path: 'baseId', model: 'bases'}}]).exec();
        return res.send(order)
    },

    // TO DO

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
        const objId = mongoose.Types.ObjectId(id)
        const order = await Order.find({ base : objId }).populate(['paymentMethod','base', { path: 'products', populate: { path: 'item', model: 'product' } }]).exec()
        return res.send(order)
    },

    findByBaseNow: async(req, res) => {
        const { id } = req.body;
        const order = await Order.find({ 'base._id' : id }).populate(['paymentMethod','base', { path: 'products', populate: { path: 'item', model: 'product' } }]).exec()
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