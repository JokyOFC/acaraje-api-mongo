const Payment = require('../../models/payment');
const Base = require('../../models/base')

module.exports = {
    create : async (req, res) => {
        const { BaseId, name } = req.body

        const base = await Base.findById(BaseId)
        
        const payment = await Payment.create({ name })

        const paymentId = payment.id

        console.log(base)

        const baseCreate = await base.payments.push(paymentId)
        
        // const filial = await base.filiais.find((filial) => filial.filicod == FiliId)
        
        // const payments = filial.payments

        // base.payments.push({ name: name })

        base.save()

        const paymentsPopulated = await Base.findById(BaseId).populate('payments')

        return res.send(paymentsPopulated);
    },
    find : async(req, res) => {
        const { BaseId } = req.body
        const base = await Base.findById(BaseId).populate('payments')
        // const filial = await base.filiais.find((filial) => filial.filicod == FiliId)

        // const payment = await Payment.find()
        // const payment = filial.payments

        const payments = base.payments

        return res.send(payments)
    },

    // TO DO

    delete : async (req, res) => {
        const { BaseId, paymentId } = req.body
        // const payment = await Payment.deleteOne({ id: id });

        const base = await Base.findById(BaseId)

        let payment = base.payments

        console.log(paymentId)

        const indexPay = payment.indexOf(paymentId)

        let paymentDelete = payment.splice(indexPay, 1)

        
        payment = paymentDelete
        
        console.log(payment)

        // payment = paymentDelete

        // payment.push(payment)

        base.save()
        
        return res.send(base)
    },
    update : async (req, res) => {
        
        /*
            {
                "paymentId" : "paymentId",
                "name" : "name",
            }
        */

            const { paymentId, name, price } = req.body;

            const payment = await Payment.findById(paymentId)

    }
}