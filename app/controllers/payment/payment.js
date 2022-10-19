const Payment = require('../../models/payment');

module.exports = {
    create : async (req, res) => {
        const { name } = req.body
        const payment = await Payment.create({name})
        return res.send(payment);
    },
    find : async(req, res) => {
        const payment = await Payment.find()
        return res.send(payment)
    },
    delete : async (req, res) => {
        const { id } = req.body
        const payment = await Payment.deleteOne({ id: id })
        return res.send(payment)
    },
}