const express = require('express');
const router = new express.Router;
// const User = require('./controllers/user/user');
// const Post = require('./controllers/post/post');

const order = require('./controllers/order/order')
const payment = require('./controllers/payment/payment')
const product = require('./controllers/product/product')
const base = require('./controllers/base/base');
const prices = require('./controllers/prices/prices');

router.get('/',(req,res)=>res.send('ok'));

// orders routes
router.get('/orders', order.find)

router.post('/orders/base', order.findByBase)
router.post('/orders/base/now', order.findByBaseNow)

router.post('/order/create', order.post)
router.post('/order/cancel', order.cancel)
router.post('/order/finishupdate', order.finishUpdate)

// products routes
router.post('/products', product.find)

router.post('/product/create', product.create)
router.post('/product/delete', product.delete)

// payment routes
router.post('/payments', payment.find)

router.post('/payment/create', payment.create)
router.post('/payment/delete', payment.delete)

// base routes
router.get('/bases', base.find)

router.post('/base/id', base.findById)
router.post('/base/fili/id', base.findFiliById)

router.post('/base/fili/delete', base.deleteFili)

router.post('/base/create', base.create)
router.post('/base/createfili', base.createFili)
router.post('/base/delete', base.delete)

router.post('/base/update', base.updateFilis)
router.post('/base/updatefiliname', base.updateFiliName)

router.get('/prices', prices.find)


// router.post('/user/create',User.create);
// router.post('/user/find',User.find);
// router.post('/user/find/post/:id', User.postsByUser);
// // post routes
// router.post('/post/create/:id', Post.create);
// router.post('/post/populate/:id',Post.userByPost);

module.exports = router;