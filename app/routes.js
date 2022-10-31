const express = require('express');
const router = new express.Router;
// const User = require('./controllers/user/user');
// const Post = require('./controllers/post/post');

const order = require('./controllers/order/order')
const payment = require('./controllers/payment/payment')
const product = require('./controllers/product/product')
const base = require('./controllers/base/base');
const filiais = require('./controllers/filiais');

router.get('/',(req,res)=>res.send('ok'));

// orders routes
router.get('/orders', order.find)

router.post('/order/create', order.post)
router.post('/order/cancel', order.cancel)

// products routes
router.get('/products', product.find)

router.post('/product/create', product.create)
router.post('/product/delete', product.delete)

// payment routes
router.get('/payments', payment.find)

router.post('/payment/create', payment.create)
router.post('/payment/delete', payment.delete)

// base routes
router.get('/bases', base.find)

router.post('/base/create', base.create)
router.post('/base/delete', base.delete)

// fili routes
router.get('/fili', filiais.find)

router.post('/fili/create', filiais.create)
router.post('/fili/delete', filiais.delete)


// router.post('/user/create',User.create);
// router.post('/user/find',User.find);
// router.post('/user/find/post/:id', User.postsByUser);
// // post routes
// router.post('/post/create/:id', Post.create);
// router.post('/post/populate/:id',Post.userByPost);

module.exports = router;