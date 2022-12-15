const Base = require('../../models/base');
const Products = require('../../models/product');
const Payments = require('../../models/payment');
const Orders = require('../../models/order')
const Prices = require('../../models/prices')

module.exports = {
    create : async (req, res) => {
        const { name, filiais } = req.body
        const base = await Base.create({ name, filiais })
        return res.send(base);
    },
    createFili : async(req, res) => {
        const { baseId, filicod, name } = req.body;
        console.log("i'm creating filis!")
        const base = await Base.findById(baseId);
        const filiais = base.filiais.push({ "filicod": filicod, "name": name })
        base.save()
        return res.send(base)
    },
    deleteFili : async(req, res) => {
        const { id, filicod } = req.body;
        console.log(filicod)
        const base = await Base.findById(id);
        const filiais = base.filiais.filter(x => x.filicod !== filicod.filicod);
        console.log(filiais)
        base.filiais = filiais
        base.save();
        return res.send(base);
    },
    find : async(req, res) => {
        const base = await Base.find().populate([ 'payments', 'products']).populate([{path: 'products', populate: { path: 'price', model:'prices' }}])
        return res.send(base)
    },
    findById : async(req,res) => {
        const { id } = req.body
        const base = await Base.findById(id);
        return res.send(base)
    },
    findFiliById : async(req, res) => {
        const { BaseId, FiliId } = req.body
        const base = await Base.findById(BaseId)
        let filiais = base.filiais
        const filifilter = filiais.filter(x => x.filicod === FiliId)
        return res.send(filifilter)
    },
    delete : async (req, res) => {
        const { id } = req.body
        
        
        // const base = await Base.deleteOne({ id: id })
        const base = await Base.findById(id);

        console.log(id)
        console.log(base)

        let filiais = base.filiais
        let payments = base.payments
        let products = base.products
        
        console.log(products)
        console.log(payments)


        products.forEach( async(x) => {
            let product = await Products.findById(x)

            let price = await Prices.deleteOne({ _id: product.price._id })

            let delProd = await Products.deleteOne({ _id: x })
            console.log(delProd)
        } )
        payments.forEach( async(x) => {
            let delPay = await Payments.deleteOne({ _id: x })
            console.log(delPay)
        } )
        
        let order = await Orders.deleteMany({ "base.baseId" : id })
        const baseDelete = await Base.deleteOne({ _id: id })
        
        return res.send(baseDelete)
    },
    updateFilis : async (req, res) => {
      const { id, name, filiais } = req.body;

        const base = await Base.findById(id);
        console.log(name)
        console.log(filiais)

        if( name != undefined || name ){
            base.name = name;
            console.log(name)
            console.log("i'm updating the name!")
        }
        if(filiais != undefined || filiais){
            base.filiais = filiais
            console.log(filiais)
        }

        base.save();

      return res.send(base)
    },
    updateFiliName : async(req, res) => {
        const { baseId, id, name} = req.body;

        const base = await Base.findById(baseId);

        console.log(base)
        console.log(name)

        const filial = base.filiais.filter(x => x.filicod === id);

        console.log(filial)

        filial[0].name = name;

        console.log(filial.name)

        base.save();

        res.send(base);

    }

}