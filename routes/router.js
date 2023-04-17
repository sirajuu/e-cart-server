// import express

const express = require('express')

//  Router()
const router = new express.Router()

// import product controller
const controllers = require('../controllers/productController')
// import wishlist controller
const wishlistController =require('../controllers/wishlistController')

// import cart controller
const cartController = require('../controllers/cartController')



// get-all-products api
// router.http-request(path,callback to define logic to resolve api)
router.get('/products/get-all-products',controllers.getallproducts)

//router for view single product details
router.get('/products/:id',controllers.ViewProduct)

// route for add  to wishlist
router.post('/products/add-to-wishlist',wishlistController.addToWishlist)

// route for get all wishlist item
router.get('/wishlist/get-all-items',wishlistController.getAllWishlistItems)

// route for removing an item from wishlist
router.delete('/wishlist/remove-item/:id',wishlistController.removeWishlistItem)

// route for adding item to cart
router.post('/products/add-to-cart',cartController.addToCart)

// route for get all cart items
router.get('/cart/get-all-items',cartController.getCartItems)

// route for remove Item from cart
router.delete('/cart/item/:id',cartController.removeCartItem)

// route for incrementing cart item quantity
router.get('/cart/increment-item/:id',cartController.incrCartItem)

// route for decrementing cart item quantity
router.get('/cart/decrement-item/:id',cartController.decrCartItem)

// route for empty cart
router.delete('/cart/empty-cart',cartController.emptyCart)

// export router
module.exports=router
