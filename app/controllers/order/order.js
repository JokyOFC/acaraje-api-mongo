const { default: mongoose } = require('mongoose');
const { db } = require('../../models/order');
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
        const order = await Order.find().populate(['paymentMethod', {path: 'products', populate: {path: 'item', model: 'product'}}]).populate({path: 'products', populate: { path: 'item', populate: { path: 'price', model: 'prices' } }});
        return res.send(order)
    },

    // TO DO

    orderByDate : async(req, res) => {
        const { id, filicod } = req.body
        const order = await Order.find({$and: [{ "base.baseId": id }, { "base.fili": filicod } ]}).sort({datefield: -1}, function(err, cursor){
            console.log(err);
        })
        return res.send(order)
    },

    findByDate: async(req, res) => {
        const { id, filicod, date } = req.body;
        const order = await Order.find({$and: [{ "base.baseId": id }, { "base.fili": filicod }, {"createdAt" : new ISODate(date) } ]}).sort({datefield: -1});
    
        return res.send(order)
    },

    findByBase: async(req, res) => {
        const { id, filicod } = req.body;
        const objId = mongoose.Types.ObjectId(id)
        const order = await Order.find({$and: [{ "base.baseId": id }, { "base.fili": filicod } ]})
        return res.send(order)
    },

    findByBaseNow: async(req, res) => {

        var now = new Date();
        var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        const { id, filicod } = req.body;
        const order = await Order.find({$and: [{ "base.baseId": id }, { "base.fili": filicod }, {"createdAt": {$gte: startOfToday}} ]}).populate(['paymentMethod','base', { path: 'products', populate: { path: 'item', model: 'product' } }]).exec()

        return res.send(order)
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