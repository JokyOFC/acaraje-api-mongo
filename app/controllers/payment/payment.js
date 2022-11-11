const Payment = require('../../models/payment');
const Base = require('../../models/base')

module.exports = {
    create : async (req, res) => {
        const { BaseId, name } = req.body

        const base = await Base.findById(BaseId)
        // const filial = await base.filiais.find((filial) => filial.filicod == FiliId)
        
        // const payments = filial.payments

        base.payments.push({ name: name })

        base.save()

        const paymentsPopulated = await Base.findById(BaseId).populate([{path: 'products', populate: {path: 'price', model: 'prices'}}]).exec()

        return res.send(paymentsPopulated);
    },
    find : async(req, res) => {
        const { BaseId, FiliId } = req.body
        const base = await Base.findById(BaseId)
        const filial = await base.filiais.find((filial) => filial.filicod == FiliId)

        // const payment = await Payment.find()
        const payment = filial.payments

        return res.send(payment)
    },

    // TO DO

    delete : async (req, res) => {
        const { id } = req.body
        const payment = await Payment.deleteOne({ id: id })
        return res.send(payment)
    },
    update : async (req, res) => {
        
    }
}