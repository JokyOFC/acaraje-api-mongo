const Payment = require('../../models/payment');
const Base = require('../../models/base')

const express = require('express')

express.Router

module.exports = {
    create : async (req, res) => {
        const { BaseId, FiliId, name } = req.body
        const base = await Base.findById(BaseId)
        const filial = await base.filiais.find((filial) => filial.filicod == FiliId)
        
        // const payments = filial.payments

        filial.payments.push({ name: name })

        base.save()

        return res.send(filial);
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